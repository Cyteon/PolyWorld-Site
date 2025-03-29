<script lang="ts">
    import Progress from "$lib/components/Progress.svelte";
</script>

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
