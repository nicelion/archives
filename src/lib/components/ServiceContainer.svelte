<!--
 ServiceContainer.svelte
 archives
 
 Created by Ian Thompson on April 11th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let title = ""
    export let description = ""
    export let img
</script>

<div class="flex-grow px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp " data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
    <div class="hover:shadow-md shadow-sm py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div class="flex items-center w-full text-gray-900 mb-4">
            <img src={img} alt="" class="h-1/3 w-1/3 mx-auto">
        </div>
        <h3 class="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
        <p class="text-gray-500">{description}</p>
    </div>
</div>