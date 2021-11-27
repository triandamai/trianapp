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
                    to="/article/hello"
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
                class="text-green-500 hover:text-green-600 dark:hover:text-green-400"
                aria-label="Read"
            >
            Read more &rarr;
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