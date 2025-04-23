import Server from "$lib/models/Server";

export async function POST({ request }) {
    const {
        unique_id,
        port,
        host,
        max_players,
        players,
        name,
        version,
        compatability_ver,
        secure,
    } = await request.json();

    const existing_server = await Server.findOne({ unique_id });

    if (existing_server) {
        await Server
            .updateOne({ unique_id }, {
                port,
                host,
                max_players,
                players,
                name,
                version,
                compatability_ver,
                secure,
                last_online: new Date()
            });
    } else {
        await Server.create({
            unique_id,
            port,
            host,
            max_players,
            players,
            name,
            version,
            compatability_ver,
            secure,
            last_online: new Date()
        });
    }

    return new Response("OK")
}

export async function GET({ url }) {
    const { searchParams } = url;

    const secure_only = searchParams.get("secure_only") === "true";
    const unsecure_only = searchParams.get("unsecure_only") === "true";
    const exclude_full = searchParams.get("exclude_full") === "true";
    const exclude_empty = searchParams.get("exclude_empty") === "true";

    let query = {
        last_online: {
            $gt: new Date(new Date().getTime() - 60000 * 6) // 6 minutes
        }
    };

    if (secure_only) {
        query.secure = true;
    }

    if (unsecure_only) {
        query.secure = false;
    }

    if (exclude_full) {
        query["$expr"] = { $lt: ["$players", "$max_players"] };
    }

    if (exclude_empty) {
        query.players = { $gt: 0 };
    }

    const servers = await Server.find(query)

    return new Response(JSON.stringify(servers.map((server) => {
        return {
            port: server.port,
            host: server.host,
            max_players: server.max_players,
            players: server.players,
            name: server.name,
            version: server.version,
            compatability_ver: server.compatability_ver,
            secure: server.secure,
        }
    })), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}