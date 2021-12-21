<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 600px;">
    <div class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">

        <nuxt-link to="/" aria-label="Learn More"> 
          <img
            alt="title"
            :src="project.image"
            class="object-cover object-center lg:h-56 md:h-56 w-full"
          />
        </nuxt-link> 
      
      <div class="p-6">
        <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <nuxt-link  to="/" aria-label="Learn More" class="text-black dark:text-white">
              {{project.name}}
            </nuxt-link>
       
        </h2>
        <p class="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
          {{project.description}}
          </p>
      
          <nuxt-link
            to="/"
            class="inline-flex racking-tight font-medium leading-6 text-green-500 hover:text-green-600 dark:hover:text-green-400"
            aria-label="Learn More"
          >


              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>

          </nuxt-link>
     
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    project:Object
  },
  methods:{
    getImage(url){
      return require(url)
    }
  }
}
</script>