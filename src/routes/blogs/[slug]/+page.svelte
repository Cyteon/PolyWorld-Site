<script lang="ts">
    import type { IBlogPost } from '$lib/models/BlogPost';
    import { marked } from 'marked';
    import { onMount } from 'svelte';

    let { data } = $props();

    let post: IBlogPost = $state({})
    let error: string = $state("");

    onMount(async () => {
        const res = await fetch(`/api/blogs/${data.slug}`);

        if (res.ok) {
            post = await res.json();
            post.content = marked(post.content) as string;
        } else {
            error = (await res.json()).error;
            console.error(error);
        } 
    });
</script>

<a href="/blogs" class="absolute top-1 left-2 text-blue-300">Back to Blogs</a>

<svelte:head>
    <title>{post.title} | PolyWorld</title>
    <meta name="description" content={post.desc} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.desc} />
    <meta property="og:image" content={post.thumbnail} />
    <meta property="og:url" content={`https://polyworld.dev/blogs/${data.slug}`} />
</svelte:head>

{#if Object.keys(post).length > 0}
    <div class="flex min-h-screen px-1">
        <div class="mx-auto flex flex-col">
            <img src={post.thumbnail} alt={post.title} class="mt-8 mb-1 w-256" />
            <p class="flex flex-col md:flex-row">
                {post.title} | By {post.creator} 
                <span class="md:ml-auto">{new Date(post.createdAt).toLocaleDateString()}, {new Date(post.createdAt).toLocaleTimeString()}</span></p>
            <div class="mt-4 w-full max-w-2xl prose text-white">
                {@html post.content}
            </div>
        </div>
    </div>
{:else}
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-5xl font-bold text-red-400">{error}</h1>
    </div>
{/if}