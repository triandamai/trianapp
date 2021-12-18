<template>
  <li key="slug" class="py-12 list-none">
    <article>
      <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt class="sr-only">Published on</dt>
          <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time :datetime="article.createdAt">{{getDate(article.createdAt)}}</time>
          </dd>
        </dl>
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold leading-8 tracking-tight">
                <nuxt-link
                     :to="'article/'+article.slug"
                    class="text-gray-900 dark:text-gray-100"
                >
                  {{article.title}}
                </nuxt-link>
              </h2>
              <div class="flex flex-wrap">
                
                <span v-for="(item,index) in article.tags" :key="index">
                  <ItemTag :tag="item" />
                </span>

              </div>
            </div>
            <div class="prose text-gray-500 max-w-none dark:text-gray-400">
              {{article.description}}
            </div>
          </div>
          <div class="text-base font-medium leading-6">
            <nuxt-link
                :to="'article/'+article.slug"
                class="
                inline-flex
                items-center
                hover:underline
                leading-5
                py-2
                  text-green-500
                  hover:text-yellow-600
                  dark:hover:text-yellow-400"

                aria-label="Read"
            >

                Read more

              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block pl-2 h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </article>
  </li>
</template>
<script>
export default {
  props:{
    article:Object
  },
  data:()=>({

  }),
  methods:{
    getDate(date){
      console.log(date)
      return new Date(date).toLocaleString('en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
      )
    }
  }
}
</script>