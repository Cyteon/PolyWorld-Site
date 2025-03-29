import BlogPost from "$lib/models/BlogPost";

export async function GET({ params }) {
    const slug = params.slug;

    const post = await BlogPost.findOne({ slug });

    if (!post) {
        return Response.json({ error: "Blog post not found" }, { status: 404 });
    }

    return new Response(JSON.stringify(post), { status: 200 });
}