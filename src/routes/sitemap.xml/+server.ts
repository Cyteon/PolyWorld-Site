import BlogPost from "$lib/models/BlogPost";

export async function GET() {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${import.meta.env.VITE_SITE_URL}</loc>
            <lastmod>2025-03-30T11:08:02.588Z</lastmod>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${import.meta.env.VITE_SITE_URL}/blogs</loc>
            <lastmod>${new Date(posts[0].createdAt).toISOString()}</lastmod>
            <priority>0.8</priority>
        </url>
        ${posts.map(post => `
            <url>
                <loc>${import.meta.env.VITE_SITE_URL}/blogs/${post.slug}</loc>
                <lastmod>${new Date(post.createdAt).toISOString()}</lastmod>
                <priority>0.7</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600'
        }
    });
}