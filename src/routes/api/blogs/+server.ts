import { CREATE_BLOG_PSWD } from "$env/static/private";
import BlogPost from "$lib/models/BlogPost.js";


export async function GET({ params }) {
    let posts = await BlogPost.find({}).sort({ createdAt: -1 });

    if (!posts) {
        posts = [];
    }

    return Response.json(posts, { status: 200 });
}

export async function PUT({ request }) {
    const {
        title,
        desc,
        slug,
        creator,
        thumbnail,
        content,
        password
    } = await request.json();

    if (password !== CREATE_BLOG_PSWD) {
        return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
    }

    const blogPost = new BlogPost({
        title,
        description: desc,
        slug,
        creator,
        thumbnail,
        content
    });
    await blogPost.save();

    return new Response(JSON.stringify({ message: "Blog post created successfully" }), { status: 200 });
}