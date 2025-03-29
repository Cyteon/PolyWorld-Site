<script lang="ts">
    import { goto } from "$app/navigation";
    import { marked } from "marked";

    let password: string = "";
    let error: string = "";
    let authenticated: boolean = false;

    async function checkPassword() {
        const res = await fetch("/api/blogs/auth", {
            method: "POST",
            body: JSON.stringify({ password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            authenticated = true;
        } else {
            error = (await res.json()).error;
        }
    }

    let blogTitle: string = "";
    let blogDesc: string = "";
    let blogSlug: string = "";
    let blogCreator: string = "Cyteon (developer)";
    let blogThumbnail: string = "";
    let blogContent: string = "";

    let markdownPreview: string = "Edit to see preview";

    async function createBlog() {
        const res = await fetch("/api/blogs", {
            method: "PUT",
            body: JSON.stringify({
                title: blogTitle,
                desc: blogDesc,
                slug: blogSlug,
                creator: blogCreator,
                thumbnail: blogThumbnail,
                content: blogContent,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            goto("/blogs/" + blogSlug);
        } else {
            alert("Failed to create blog.");
        }
    }
</script>

<div class="min-h-screen flex flex-col w-full px-2">
    {#if authenticated}
        <div class="md:flex mt-4">
            <h1 class="text-5xl font-bold text-center md:text-start">Create Blog Post</h1>
            <button
                class="md:ml-auto bg-blue-500 text-white rounded-md p-2 my-auto text-lg"
                on:click={createBlog}
            >Publish</button>
        </div>
        <div class="flex flex-col md:flex-row gap-4 mt-8">
            <div class="md:w-1/3">
                <label for="blogTitle" class="font-bold">Title</label>
                <input 
                    type="text"
                    bind:value={blogTitle}
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    placeholder="Blog Title"
                />

                <label for="blogDesc" class="font-bold">Short Description</label>
                <input 
                    type="text"
                    bind:value={blogDesc}
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    placeholder="Blog Description"
                />

                <label for="blogSlug" class="font-bold">URL Slug</label>
                <input 
                    type="text"
                    bind:value={blogSlug}
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    placeholder="URL Slug"
                />

                <label for="blogCreator" class="font-bold">Blog Creator</label>
                <input 
                    type="text"
                    bind:value={blogCreator}
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    placeholder="URL Slug"
                />

                <label for="thumbNail" class="font-bold">Thumbnail</label>
                <input 
                    type="text"
                    bind:value={blogThumbnail}
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    placeholder="Thumbnail URL"
                />
            </div>

            <div class="md:w-2/3 flex flex-col">
                <label for="blogContent" class="font-bold">Content</label>
                <textarea
                    class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 w-full mb-4 mt-1"
                    rows="10"
                    placeholder="Blog Content"
                    bind:value={blogContent}
                    on:input={() => {
                        markdownPreview = marked(blogContent);
                    }}
                ></textarea>

                <label for="markdownPreview" class="font-bold">Markdown Preview</label>
                <div class="border border-neutral-800 rounded-md p-2 mt-1 prose text-white" style="max-width: 100% !important;">
                    {@html markdownPreview}
                </div>
            </div>
        </div>
    {:else}
        <div class="m-auto border border-neutral-800 p-4 rounded-md w-full max-w-sm">
            <h1 class="text-3xl font-bold">Enter Password</h1>
            <input
                type="password"
                bind:value={password}
                class="border border-neutral-700 outline-none bg-neutral-800 rounded-md p-2 mt-4 w-full"
                placeholder="Password"
            />

            {#if error}
                <p class="text-red-400 mt-3">{error}</p>
            {/if}

            <button
                on:click={checkPassword}
                class="bg-blue-500 text-white rounded-md p-2 mt-3 w-full"
            >
                Submit
            </button>
        </div>
    {/if}
</div>