import Message from '$lib/models/Message.js';

export async function POST({ request }) {
    const {
        id,
        server_id,
        author,
        content,
    } = await request.json();

    await Message.create({
        id,
        server_id,
        author: author.toString(),
        content,
    });

    return new Response("OK")
}