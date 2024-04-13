<!--
 FAQItem.svelte
 archives
 
 Created by Ian Thompson on April 13th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let faq
</script>

<div class="mt-4 flex align-middle w-full md:w-3/4 mx-auto">
    <div>
        <div class="flex items-center align-middle h-16 border-l-4 border-black">
            <span class="text-2xl text-black px-4">Q.</span>
        </div>
        <div class="flex items-center h-16 border-l-4 border-gray-400 align-middle">
            <span class="text-2xl text-gray-400 px-4">A.</span>
        </div>
    </div>
    <div>
        <div class="flex items-center h-16 align-middle">
            <span class="text-lg text-black font-bold">{faq.question}</span>
        </div>
        <div class="flex items-center py-2 align-middle">
            <span class="text-gray-500">{faq.answer}</span>
        </div>
    </div>
</div>