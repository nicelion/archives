<!--
 Estimate.svelte
 archives
 
 Created by Ian Thompson on April 10th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">

    let numberOfPhotos = 0
    let numberOfRecolor = 0
    let numberOfRestore = 0
    let numberOfUSB = 0
    let numberOfHDD = 0

    let pricingBasic = 0.4
    let tier2 = 0.35
    let tier3 = 0.3
    let recolor = 3
    let restore = 30
    let usb = 10
    let hdd = 60

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let estimatedPrice = 0.0

    $: {

        estimatedPrice = (numberOfRecolor * recolor) + (numberOfRestore * restore) + (numberOfUSB * usb) + (numberOfHDD * hdd)

        if (numberOfPhotos < 500) {
            estimatedPrice += numberOfPhotos * pricingBasic
        } else if (numberOfPhotos >= 1000) {
            estimatedPrice += numberOfPhotos * tier2
        } else if (numberOfPhotos > 1000) {
            estimatedPrice += numberOfPhotos * tier3
        }
        
        estimatedPrice = formatter.format(estimatedPrice)
    }

</script>

<div class="relative flex items-top justify-center  bg-white  sm:items-center sm:pt-0">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                    <h1 class="text-3xl text-gray-800 font-extrabold tracking-tight">
                        Get Your Instant Digitalization Estimate
                    </h1>
                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                        Fill in the form to start a conversation
                    </p>
                    <h3 class="text-6xl text-gray-800 font-extrabold tracking-tight mt-8 text-center w-full">
                        <sup class="text-green-400 text-md">$</sup>{estimatedPrice}
                    </h3>
                    <p class="mt-5 italic text-gray-600">*This is an estimate and should not be considered as a final bill.</p>
                    <!-- <div class="flex items-center mt-8 text-gray-600 ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            Acme Inc, Street, State,
                            Postal Code
                        </div>
                    </div>

                    <div class="flex items-center mt-4 text-gray-600 ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            +44 1234567890
                        </div>
                    </div>

                    <div class="flex items-center mt-2 text-gray-600 ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            info@acme.org
                        </div>
                    </div> -->
                </div>

                <form class="p-6 flex flex-col justify-center">
                    <div class="flex flex-col space-y-3">
                        <div class="w-full flex flex-col">
                            <label for="items" class="">Number of Items</label>
                            <input type="number" name="name" id="name" placeholder="ex: 350" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" bind:value={numberOfPhotos}>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="recolor" class="">Number Photos Recolored</label>
                            <input type="number" name="name" id="name" placeholder="ex: 350" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" bind:value={numberOfRecolor}>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="restore" class="">Number Photos Restored</label>
                            <input type="number" name="name" id="name" placeholder="ex: 350" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" bind:value={numberOfRestore}>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="usb" class="">Return Photos on USB Stick</label>
                            <input type="number" name="name" id="name" placeholder="ex: 350" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" bind:value={numberOfUSB}>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="hdd" class="">Return Photos on Hard Drive</label>
                            <input type="number" name="name" id="name" placeholder="ex: 350" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" bind:value={numberOfHDD}>
                        </div>
                    </div>

                    <!-- <div class="flex flex-col mt-2">
                        <label for="email" class="hidden">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                    </div>

                    <div class="flex flex-col mt-2">
                        <label for="tel" class="hidden">Number</label>
                        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                    </div>

                    <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                        Submit
                    </button> -->
                </form>
            </div>
        </div>
    </div>
</div>