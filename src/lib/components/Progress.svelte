<script lang="ts">
    const steps = [
        {
            completed: true,
            title: "Development Started",
            percentageToNext: 80
        },
        {
            completed: false,
            title: "Prototype",
        },
        {
            completed: false,
            title: "Private Playtest"
        },
		{
            completed: false,
            title: "Public Demo"
        },
		{
            completed: false,
            title: "Early Access"
        },
    ]
</script>

<div class="max-w-4xl mx-auto pb-4">	
	<div class="hidden md:block">
		<div class="flex pb-3 mx-auto">
			{#each steps as step, i}
				<div class="flex-1 relative">
					<div class={`w-10 h-10 ${step.completed ? "bg-green-400" : "bg-white"} mx-auto rounded-full text-lg text-white flex items-center`}>
						{#if step.completed}
							<span class="text-white text-center w-full">
								<i class="fa fa-check w-full fill-current white"></i>
							</span>
						{:else}
							<span class="text-black text-center w-full">{i + 1}</span>
						{/if}
					</div>
					<div class="absolute top-12 left-1/2 -translate-x-1/2 text-center text-sm text-nowrap">
						{step.title}
					</div>
				</div>
	
				{#if i < steps.length - 1}
					<div class="w-1/6 align-center items-center align-middle content-center flex mx-2">
						<div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
							<div class="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded " style={`width: ${step.percentageToNext || 0}%`}></div>
						</div>
					</div>
				{/if}
			{/each}	
		</div>
	</div>

	<div class="md:hidden flex justify-center min-h-screen items-center">
		<div class="max-w-xs w-full">
			{#each steps as step, i}
				<div class="flex flex-col items-center">
					<div class="flex flex-col items-center">
						<div class={`w-10 h-10 ${step.completed ? "bg-green-400" : "bg-white"} 
							   rounded-full flex items-center justify-center mb-1`}>
							{#if step.completed}
								<i class="fa fa-check text-white"></i>
							{:else}
								<span class="text-black">{i + 1}</span>
							{/if}
						</div>
						<div class="text-sm text-center mb-2">{step.title}</div>
					</div>
	
					{#if i < steps.length - 1}
						<div class="w-2 h-16 bg-gray-300 mx-auto rounded relative mb-2">
							<div class="absolute  w-full bg-green-400 rounded" 
								style={`height: ${step.percentageToNext || 0}%`}
							></div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>