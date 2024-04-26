<script>
	import Estimate from "$lib/components/Estimate.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import GalleryItem from "$lib/components/GalleryItem.svelte";
	import Points from "$lib/components/Points.svelte";
	import ServiceContainer from "$lib/components/ServiceContainer.svelte";
	import Timeline from "$lib/components/Timeline.svelte";
	// import ImageCompare from 'svelte-image-compare';
  import CompareImage from "svelte-compare-image/CompareImage.svelte";

  const handleBackgroundImage = `url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')`;

</script>

<svelte:head>
    <title>Digitize Your Memories | Nice Lion Technologies Physical Media Archiving</title>
    <meta name="description" content="At Nice Lion Technologies, we believe that every photo is a treasure worth preserving. Our photo digitization services are designed to breathe new life into your old photos, ensuring that your memories are not only preserved but also easily accessible and shareable for generations to come.">
</svelte:head>


<!-- Opened Nav in Mobile, you can use javascript/jQuery -->
<div id="nav-opened" class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
    <div class="p-2 divide-y divide-gray-600 flex flex-col">
        <a href="#about" class="p-2 font-semibold hover:text-indigo-700">About</a>
        <a href="#whyus" class="p-2 font-semibold hover:text-indigo-700">Why Us ?</a>
        <a href="#showcase" class="p-2 font-semibold hover:text-indigo-700">Our Products</a>
    </div>
</div>

<header id="up" class="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
    <!-- Overlay Background + Center Control -->
    <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.7);">
        <div class="mx-2 text-center max-w-5xl space-y-6">
            <h1 class="text-gray-100 font-extrabold text-5xl">
                <span class="text-white">Preserve Your Past.</span> Digitalize Your Memories.
            </h1>
            <h2 class="text-gray-200  text-3xl leading-tight">
                    Expert Media Digitaliztion Services Here in South Carolina.
            </h2>
            <div class="inline-flex">
                <a href="#about"><button class="p-2 my-5 mx-2 bg-transparent border-2 bg-gray-500  border-gray-500 rounded  font-bold text-white shadow-md transition duration-500 md:text-lg">Learn More</button></a>
            </div>
    </div>
    
</div>
</header>

<!-- component -->
<div class="py-16 bg-white space-y-24" id="about">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img src="/wedding.jpeg" alt="image" loading="lazy" width="" height="" class="rounded-lg shadow-md">
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Keeping your memories preserved.</h2>
            <p class="mt-6 text-gray-600">
                In our fast-paced digital world, old photos often get left behind, stored away in boxes, albums, or forgotten drawers. Yet, these photos are more than just pieces of paper; they are windows to the past, holding cherished memories and stories of our lives and loved ones.
            </p>
            <p class="mt-4 text-gray-600">
                At Nice Lion Technologies, we believe that every photo is a treasure worth preserving. Our photo digitization services are designed to breathe new life into your old photos, ensuring that your memories are not only preserved but also easily accessible and shareable for generations to come.
            </p>
          </div>
        </div>
    </div>
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:w-7/12 lg:w-6/12 space-y-9">
            <div class="w-full space-y-5">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Why it matters.</h2>
                <p>
                    We understand the value of your memories and the importance of preserving them. Let us help you transform your old photos into digital treasures that will last a lifetime.
                </p>
            </div>
            <div class="flex w-full flex-wrap">
                <Points title="Preservation" description="Physical photos are susceptible to damage from time, light, and environmental factors. Digitizing them preserves their quality and ensures they remain intact for years to come."/>
                <Points title="Accessibility" description="Digital photos can be easily stored, organized, and accessed on various devices, making it convenient to relive and share your memories with others." />
                <Points title="Sharing and Storytelling" description="Digitized photos can be shared with family and friends, helping to keep your stories and family history alive for future generations." />
                <Points title="Space Saving" description="Digitizing photos reduces the need for physical storage space, freeing up room in your home while preserving your memories." />
                <Points title="Restoration" description="Old or damaged photos can be digitally restored, bringing back clarity and color that may have faded over time." />
                <Points title="Compliance" description="We also digitize old business related documents needed to be kept for compliancee purposes." />
            </div>
          </div>
          <div class="md:5/12 lg:w-5/12">
            <img src="/old-photos.jpeg" alt="image" loading="lazy" width="" height="" class="rounded-lg shadow-md">
          </div>
        </div>
    </div>
  </div>

<div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <div class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="leading-normal mb-2 font-bold text-black text-4xl">What We Do</h2>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">We live in a digital world. So let's make sure we can preserve our memories!</p>
        </div>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <ServiceContainer title="Image Archiving" description="Digitize all of your physical images." img="/img/scan.png"/>
            <ServiceContainer title="Document Archiving" description="From old newspaper articles to journal entries: we can digitize that!" img="/img/document.png"/>
            <ServiceContainer title="Slide Archiving" description="Have a box of old slides laying around? We can digitize that too!" img="/img/slide.png"/>
            <ServiceContainer title="Image Recolor" description="Recolor black and white photos in various different styles" img="/img/colour.png"/>
            <ServiceContainer title="Image Repair" description="Sometimes, your images may have stains or other forms of damage. We can fix that!" img="/img/service.png"/>
            <ServiceContainer title="Keep It Forever" description="All of your digitized media will be returned promptly" img="/img/usb-flash-drive.png"/>
        </div>
        <!-- end row -->
    </div>

    <!-- <div class="container flex flex-col items-center gap-16 mx-auto mt-12" >
      <div class="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
          <div class="flex flex-col items-center rounded-lg bg-gray-100 py-5">
          <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><span id="countto1" countTo="250">5</span>+</h3>
          <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Satisfied Customers</p>
          </div>
          <div class="flex flex-col items-center">
          <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><span id="countto2" countTo="12">1.4</span>k</h3>
          <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Documents Digitized</p>
          </div>
          <div class="flex flex-col items-center">
          <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><span id="countto3" countTo="2600" data-decimal="1">12</span></h3>
          <p class="text-base font-medium leading-7 text-center text-dark-grey-600">States</p>
          </div>
          <div class="flex flex-col items-center">
          <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><span id="countto4" countTo="18000"></span>+</h3>
          <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Daily Website Visitors</p>
          </div>
      </div>
      </div> -->

</div>

<div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto" id="pricing">
    <div class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="leading-normal mb-2 font-bold text-black text-4xl">Pricing</h2>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Simple, affordable, and transparent pricing let's you confidently digitize your physical media.</p>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
      <div class="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div class="p-6 sm:px-8">
          <h2 class="text-lg font-medium text-gray-900">
            Just a Few...
            <span class="sr-only">Plan</span>
          </h2>
  
          <p class="mt-2 text-gray-700">Digitize 1 - 300 items.</p>
  
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"><sup class="text-green-500  text-lg pr-1">$</sup>0.40 </strong>
  
            <span class="text-sm font-medium text-gray-700">/ item</span>
          </p>
  
          <a
            class="mt-4 block rounded border border-gray-600 bg-gray-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 sm:mt-6"
            href="https://forms.gle/U311BKuTMrwkBYoD9" target="_blank"
          >
            Get Started
          </a>
        </div>
  
        <!-- <div class="p-6 sm:px-8">
          <p class="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul class="mt-2 space-y-2 sm:mt-4">
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 10 users </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 2GB of storage </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Email support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span class="text-gray-700"> Help center access </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span class="text-gray-700"> Phone support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span class="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div> -->
      </div>
  
      <div class="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div class="p-6 sm:px-8">
          <h2 class="text-lg font-medium text-gray-900">
            I've Got a Lot...
            <span class="sr-only">Plan</span>
          </h2>
  
          <p class="mt-2 text-gray-700">Digitize 301 - 500 items.</p>
  
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"><sup class="text-green-500 text-lg pr-1">$</sup>0.35 </strong>
  
            <span class="text-sm font-medium text-gray-700">/ item</span>
          </p>
  
          <a
            class="mt-4 block rounded border border-gray-600 bg-gray-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 sm:mt-6"
            href="https://forms.gle/U311BKuTMrwkBYoD9" target="_blank"          >
            Get Started
          </a>
        </div>
  
        <!-- <div class="p-6 sm:px-8">
          <p class="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul class="mt-2 space-y-2 sm:mt-4">
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 20 users </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 5GB of storage </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Email support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Help center access </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span class="text-gray-700"> Phone support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
  
              <span class="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div> -->
      </div>
  
      <div class="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div class="p-6 sm:px-8">
          <h2 class="text-lg font-medium text-gray-900">
            Library of Alexandria
            <span class="sr-only">Plan</span>
          </h2>
  
          <p class="mt-2 text-gray-700">Digitize 500+ items.</p>
  
          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"><sup class="text-green-500 text-lg pr-1">$</sup>0.30 </strong>
  
            <span class="text-sm font-medium text-gray-700">/ item</span>
          </p>
  
          <a
            class="mt-4 block rounded border border-gray-600 bg-gray-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 sm:mt-6"
            href="https://forms.gle/U311BKuTMrwkBYoD9" target="_blank"          >
            Get Started
          </a>
        </div>
  
        <!-- <div class="p-6 sm:px-8">
          <p class="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
  
          <ul class="mt-2 space-y-2 sm:mt-4">
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 50 users </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> 20GB of storage </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Email support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Help center access </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Phone support </span>
            </li>
  
            <li class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-indigo-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
  
              <span class="text-gray-700"> Community access </span>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="mt-12 text-gray-500 text-sm md:px-16 space-y-2">
        <p><span class="font-bold">Note:</span> Some services have an additional charge.</p>
        <p>
            Image recoloring services are billed at $3.00 per photo.
        </p>
        <p>
            Image repair services are billed at $30.00 per photo.
        </p>
        <p>
          Both repair and recoloring services may differ in actual cost. We will confirm with you before these services are completed.
        </p>
        <p>
            Digitzed files will be avalible for download for free. However, this link will only be avalible for a minimum of one month. USB Drives of External Hard Drives are availible for purchase at a rate of $10.00 and $60.00, respectivly. You are able to send in your own drives and we will happily upload your media to these drives at no cost.
        </p>
        <p>
            We are happy to offer volume discounts on recolor and repair services. Please reach out for more information.
        </p>
    </div>
  </div>

<!-- component -->
<Estimate />


<Timeline />

<!-- component -->
<section class="text-gray-600 body-font" id="our-work">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Work</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">View a collection of physical media digitized by Nice Lion Technolgies.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <GalleryItem title="Spring in the Sprinker" src="/img/gallery/1.jpeg"/>
        <GalleryItem title="Samson is interested" src="/img/gallery/2.jpeg"/>
        <GalleryItem title="Samson has come home from the vet." src="/img/gallery/3.jpeg"/>
        <GalleryItem title="Samson relaxing" src="/img/gallery/4.jpeg"/>
        <GalleryItem title="A Late 90's Halloween" src="/img/gallery/5.jpeg"/>
        <GalleryItem title="At the Lake" src="/img/gallery/6.jpeg"/>
      </div>
    </div>

    <div class="flex w-full flex-col md:flex-row align-middle items-center justify-center rounded-md space-x-5 h-full px-5">
      <div class="md:w-1/3 w-full">
        <CompareImage
              imageLeftSrc="/img/compare/school_before.jpeg"
              imageLeftAlt="left"
              imageRightSrc="/img/compare/school_after.jpeg"
              imageRightAlt="right"
              --handle-size="2.5rem"
              --handle-background-color="rgba(0, 0, 0, 0.6)"
              --handle-background-image={handleBackgroundImage}
              --handle-border-width="0.125rem"
              --slider-color="#ffffff"
              --slider-width="0.125rem"
            >
            <svelte:fragment slot="slider-label">
              Set the visibility of one image over the other. 0 is full visibility of the
              second image and 100 is full visibility of the first image. Any amount
              in-between is a left/right cutoff at the percentage of the slider.
            </svelte:fragment>
        </CompareImage>
          <p class="text-center mt-4 italic">Image Recolor</p>
      </div>
      <div class="md:w-1/3 w-full">
        <CompareImage
              imageLeftSrc="/img/compare/music_before.jpeg"
              imageLeftAlt="left"
              imageRightSrc="/img/compare/music_after.jpeg"
              imageRightAlt="right"
              --handle-size="2.5rem"
              --handle-background-color="rgba(0, 0, 0, 0.6)"
              --handle-background-image={handleBackgroundImage}
              --handle-border-width="0.125rem"
              --slider-color="#ffffff"
              --slider-width="0.125rem"
            >
            <svelte:fragment slot="slider-label">
              Set the visibility of one image over the other. 0 is full visibility of the
              second image and 100 is full visibility of the first image. Any amount
              in-between is a left/right cutoff at the percentage of the slider.
            </svelte:fragment>
        </CompareImage>
          <p class="text-center mt-4 italic">Image Repair</p>
      </div>
    </div>

</section>

<section id="faq" class="w-full flex flex-col">
  <Faq />
  <a class="btn btn-active btn-neutral mx-auto" href="/faqs">View More</a>
  <!-- <p>View More</p> -->
</section>
<!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVlGKFQcAl9DsonsH50p6FybhtdN7mzkaIn94xnCVuxy2JUQ/viewform?embedded=true" onload={'javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'} style="height:200px;width:100%;border:none;overflow:hidden;"frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->