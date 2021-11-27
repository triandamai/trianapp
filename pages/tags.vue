<template>
  <div>
     <div class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div class="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>
        <div class="flex flex-wrap max-w-lg">
              <div v-for="(item,index) in 20" :key="index"  class="mt-2 mb-2 mr-5">
                <ItemTag/>
                <nuxt-link
                  to=""
                  class="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                >
                  (1)
                </nuxt-link>
              </div>
         
        </div>
      </div>
  </div>
</template>
