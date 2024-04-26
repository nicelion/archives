<!--
 +page.svelte
 archives
 
 Created by Ian Thompson on April 26th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    import Faq from '$lib/components/FAQ.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>
    <title>Frequently Asked Questions | Physical Media Archiving by Nice Lion Technologies</title>
</svelte:head>
<Faq />