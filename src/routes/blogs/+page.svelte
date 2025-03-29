<script lang="ts">
    import { onMount } from "svelte";

    let posts: any[] = [];

    onMount(async () => {
        const res = await fetch("/api/blogs");

        if (res.ok) {
            posts = await res.json();
        } else {
            console.error("Failed to fetch blogs");
        }
    });
</script>

<a href="/" class="absolute top-1 left-2 text-blue-300">Back Home</a>

<div class="min-h-screen w-full flex px-1">
    <div class="md:w-1/2 mx-auto mt-2">
        <h1 class="text-6xl font-bold text-center">Blogs</h1>

        <div class="md:grid grid-cols-2 gap-4 mt-4">
            {#each posts as post}
                <a href={`/blogs/${post.slug}`} class="flex flex-col border border-neutral-700 p-2 rounded-md">
                    <img src={post.thumbnail} alt={post.title} class="w-full h-32 object-cover" />
                    <h2 class="text-xl font-bold mt-2">{post.title}</h2>
                    <p class="text-gray-300">{post.description}</p>
                    <p class="text-gray-400 text-sm">
                        {new Date(post.createdAt).toLocaleDateString()}, {new Date(post.createdAt).toLocaleTimeString()}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</div>