<script lang="ts">
    import Progress from "$lib/components/Progress.svelte";

    const emailRegex: RegExp =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    let email: string = "";
    let error: string = "";
    let submitted: boolean = false;

    async function submitEmail() {
        error = "";
        submitted = false;

        if (emailRegex.test(email)) {
            const res = await fetch("/api/emails", {
                method: "PUT",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                submitted = true;
            } else {
                const data = await res.json();
                error = data.message || "Failed to submit email.";
            }
        } else {
            error = "Please enter a valid email address.";
        }
    }
</script>

<svelte:head>
    <title>PolyWorld</title>
    <meta name="og:url" content="https://polyworld.xyz" />
    <meta name="og:title" content="PolyWorld" />
    <meta name="og:description" content="A low-poly open-world multiplayer indie game. Currently in early development." />
</svelte:head>

<div class="min-h-screen flex flex-col w-full">
    <div class="mt-4 w-fit mx-auto flex flex-col items-center">
        <h1 class="text-6xl font-bold">PolyWorld</h1>
        <p class="text-lg ml-auto">Release date: TBA</p>
    </div>
    
    <div class="mt-8 w-fit mx-auto flex flex-col">
        <h2 class="text-lg mb-[-8px]">Get Notified</h2>
        
        <div>
            <input
                type="email"
                placeholder="Enter your email"
                bind:value={email}
                class={`p-2 border border-neutral-700 bg-neutral-800 rounded outline-none 
                    ${error ? "border-red-400" : ""} ${submitted ? "border-green-300" : ""}
                }`}
            />
            <button
                class="mt-2 p-2 bg-blue-500 text-white rounded"
                on:click={submitEmail}
            >
                Notify me
            </button>
        </div>
        
        {#if error}
            <p class="text-red-400 text-sm">
                {error}
            </p>
        {/if}

        <p class="text-sm text-neutral-400">
            Enter your email and
            <a href={`/unsubscribe?email=${email}`} class="underline"> click here</a>
            to unsubscribe.
        </p>
    </div>

    <div class="mt-8 md:mt-72">
        <Progress />
    </div>

    <footer class="mb-4 mt-auto mx-auto flex flex-col items-center text-lg">
        <a href="/blogs" class="text-blue-300 underline">Blogs</a>
    </footer>
</div>
