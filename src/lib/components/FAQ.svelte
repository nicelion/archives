<!--
 FAQ.svelte
 archives
 
 Created by Ian Thompson on April 13th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import FaqItem from "./FAQItem.svelte";

    let faq = [
        {
            question: "What types of media can you digitize?",
            answer: "We can digitize a wide range of photos, including prints, slides, and polaroids. We can also digitize documents such as newspapers, letters, journals, or just about anything!"
        }, 
        {
            question: "How do I prepare my media for digitization?",
            answer: "Ensure your photos are clean and free of dust and debris. Remove them from albums or frames if necessary."
        },
        {
            question: "How long does the digitization process take?",
            answer: "The time required depends on the quantity and condition of the photos. We strive to complete projects promptly and will provide an estimated timeline upon assessment. Services can be expedited at an additional cost."
        },
        {
            question: "What format will my media be in after digitization?",
            answer: "Your photos will be converted into digital files, typically in JPEG format. Documents may be returned as PDFs or images. Upon request, images can be returned as TIFF files which support higher resolutions. Other formats may be available upon request."
        },
        {
            question: "Will my original media be returned to me?",
            answer: "Yes, we will return your original media along with the digitized copies. If you'd like us to toss them, we can do that too."
        },
        {
            question: "How can I access my digitized media?",
            answer: "Your digitized photos will be provided to you either digitally (via download or USB drive) or in physical format (DVD or printed photos), depending on your preference. Upon digitization, your photos will be available for web download for a pre-arranged amount of time. We will not keep digital photos indefinitely."
        },
        {
            question: "Is my personal information and media kept secure?",
            answer: "Yes, we take privacy and security seriously. Your personal information and media are kept confidential and secure throughout the digitization process."
        },
        {
            question: "What happens if my media is damaged during digitization?",
            answer: "While we take great care in handling media, accidents can happen. In the rare event that a photo or document is damaged during digitization, we will notify you immediately and work to find a resolution, which may include compensation or restoration services. "
        }
    ]
</script>

<!-- component -->
<div class="p-8">
    <div class="bg-white p-4 rounded-lg py-8 mt-12">
        <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Frequently Asked Questions</h4>
        <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
        <div class="space-y-5 px-2 xl:px-16 mt-12">
            {#each faq as item}
                <FaqItem faq={item} />
            {/each}
        </div>
    </div>
</div>