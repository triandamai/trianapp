<template>
  <div class="px-4 xl:px-12 2xl:px-4 mb-14 lg:mb-24">
    <div class="pt-8 lg:pt-16 flex flex-col items-center container mx-auto">
      <h1
        class="w-full ls-5 text-center font-black text-gray-900 dark:text-gray-50 uppercase"
      >
        Posts <br />
        <!-- Templates for <br /> -->
        <!-- <span class="template-react bg-clip-text t-f-c">REACT </span>
          <span class="template-angular bg-clip-text t-f-c pr-1"> ANGULAR</span
          ><span class="template-vue bg-clip-text t-f-c"> VUE</span> -->
      </h1>
      <slot>
        <p class="tagline w-10/12 md:w-2/3 mt-8 text-center dark:text-gray-400">
          default sub header
        </p>
      </slot>
    </div>
  </div>
</template>
