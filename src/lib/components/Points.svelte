<!--
 Points.svelte
 archives
 
 Created by Ian Thompson on April 11th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let title = ""
    export let description = ""
</script>

<div class="offering flex items-center space-x-4 my-4 p-3 w-full lg:w-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 flex-none text-nice-lion-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col space-y-3">
        <h3 class="text-xl font-extrabold">{title}</h3>
        <p class="italic">{description}</p>
    </div>
</div>