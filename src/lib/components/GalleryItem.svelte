<!--
 GalleryItem.svelte
 archives
 
 Created by Ian Thompson on April 10th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let src = ""
    export let title = ""
    export let description = ""
</script>

<div class="lg:w-1/3 sm:w-1/2 p-4 h-72 w-full">
    <div class="flex relative h-full">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg" src={src}>
        <div class="px-8 py-10 relative z-10 w-full border-2 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg transition duration-600 ease-in-out">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
        <p class="leading-relaxed">{description}.</p>
        </div>
    </div>
</div>