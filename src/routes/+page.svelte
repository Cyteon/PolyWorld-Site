<script lang="ts">
    import Progress from "$lib/components/Progress.svelte";
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

    <div class="mt-8 md:my-auto">
        <Progress />
    </div>

    <footer class="mb-4 mx-auto flex flex-col items-center text-lg">
        <a href="/blogs" class="text-blue-300 underline">Blogs</a>
    </footer>
</div>
