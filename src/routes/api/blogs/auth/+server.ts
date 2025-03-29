import { CREATE_BLOG_PSWD } from "$env/static/private";


export async function POST({ request }) {
    const { password } = await request.json();

    if (password !== CREATE_BLOG_PSWD) {
        return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Password is valid" }), { status: 200 });
}