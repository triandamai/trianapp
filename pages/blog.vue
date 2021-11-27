<template>
  <div class="bg-white dark:bg-gray-800">
    <div class="divide-y">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest Post
        </h1>
        <div class="relative max-w-lg">
          <input
              aria-label="Search articles"
              type="text"
          placeholder="Search articles"
          class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
              class="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <ul class="border-t-2">
        <div v-for="(article,index) in articles" :key="index">
        <ItemBlog  :article="article"/>
        </div>
    </ul>
  </div>
</template>
<script>

export default {
  async asyncData(context) {
    const articles = await context.$content('blog')
      .only(['title','description','slug','createdAt','updatedAt','tags'])
      .sortBy('createdAt','asc')
      .fetch()

     // console.log( context.$content)

    return{articles}
  }
}
</script>
