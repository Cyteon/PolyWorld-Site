<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    var email: string = "";
    var error: string = "";
    var submitted: boolean = false;

    const emailRegex: RegExp =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    onMount(async () => {
        if (browser) {
            const urlParams = new URLSearchParams(window.location.search);
            email = urlParams.get("email") || "";

            if (!email) {
                error = "Missing email parameter.";
                return;
            }

            if (!emailRegex.test(email)) {
                error = "Invalid email provided.";
                return;
            }

            const res = await fetch("/api/emails", {
                method: "DELETE",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                submitted = true;
            } else {
                const data = await res.json();
                error = data.message || "Failed to unsubscribe email.";
            }
        }
    })
</script>

<div class="min-h-screen w-full">
   {#if error}
        <div class="flex flex-col items-center justify-center min-h-screen">
            <p class="text-2xl text-red-400">{error}</p>
        </div>
    {:else if submitted}
        <div class="flex flex-col items-center justify-center min-h-screen">
            <p class="text-2xl text-green-400">Email unsubscribed successfully!</p>
        </div>
    {:else}
        <div class="flex flex-col items-center justify-center min-h-screen">
            <p class="text-2xl">Unsubscribing...</p>
        </div>
    {/if}
</div>