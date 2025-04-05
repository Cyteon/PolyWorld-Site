import Email from "$lib/models/Email";

export async function PUT({ request }) {
    const { email } = await request.json();

    if (!email) {
        return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    let existing = await Email.findOne({ email });

    if (existing) {
        return new Response(JSON.stringify({ message: "Email already subscribed" }), { status: 400 });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return new Response(JSON.stringify({ message: "Email added successfully" }));
}

export async function DELETE({ request }) {
    const { email } = await request.json();

    if (!email) {
        return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    let existing = await Email.findOne({ email });

    if (!existing) {
        return new Response(JSON.stringify({ message: "Email is not subscribed" }), { status: 404 });
    }

    await Email.deleteOne({ email });

    return new Response(JSON.stringify({ message: "Email removed successfully" }));
}