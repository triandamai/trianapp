<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 544px;">
    <div class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">

        <nuxt-link to="/" aria-label=""> 
          <img
            alt="title"
            :src="require('assets/img/project.webp')"
            class="object-cover object-center lg:h-48 md:h-36"
            width="544px"
            height="306px"
          />
        </nuxt-link> 
      
      <div class="p-6">
        <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
      
            <nuxt-link  to="/" aria-label="ttile">
              Ini Judul
            </nuxt-link>
       
        </h2>
        <p class="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          Deskripsi
          </p>
      
          <nuxt-link
            to="/"
            class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="title"
          >
            Learn more &rarr;
          </nuxt-link>
     
      </div>
    </div>
  </div>
</template>