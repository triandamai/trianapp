<template>
  <article>
    <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 pb-8">
      <header class="pt-6 xl:pb-6">
        <div class="space-y-1 text-center">
          <dl class="space-y-10">
            <div>
              <dt class="sr-only">Published on</dt>
              <dd
                class="
                  text-base
                  font-medium
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                "
              >
                <time :datetime="article.createdAt"
                  >{{getDate(article.createdAt)}}</time
                >
              </dd>
            </div>
          </dl>
          <div>
            <h1
              class="
                text-3xl
                font-extrabold
                leading-9
                tracking-tight
                text-gray-900
                dark:text-gray-100
                sm:text-4xl sm:leading-10
                md:text-5xl md:leading-14
              "
            >
              {{ article.title }}
            </h1>
          </div>
        </div>
      </header>
      <div
        class="
          divide-y divide-gray-200
          xl:divide-y-0
          dark:divide-gray-700
          xl:grid xl:grid-cols-4 xl:gap-x-6
          border-b-2
        "
        style="grid-template-rows: auto 1fr"
      >
        <dl
          class="
            pt-6
            pb-10
            xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700
          "
        >
          <dt class="sr-only">Authors</dt>
          <dd>
            <ul
              class="
                flex
                justify-center
                space-x-8
                xl:block
                sm:space-x-12
                xl:space-x-0 xl:space-y-8
              "
            >
              <li class="flex items-center space-x-2">
                <span
                  style="
                    box-sizing: border-box;
                    display: inline-block;
                    overflow: hidden;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                    position: relative;
                    max-width: 100%;
                  "
                  ><img
                    alt="avatar"
                    class="w-10 h-10 rounded-full"
                    src="https://avatars.githubusercontent.com/u/41132846?v=4"
                    decoding="async"
                    data-nimg="intrinsic"
                /></span>
                <dl class="text-sm font-medium leading-5 whitespace-nowrap">
                  <dt class="sr-only">Name</dt>
                  <dd class="text-gray-900 dark:text-gray-100">
                    {{article.author}}
                  </dd>
                  <dt class="sr-only">Twitter</dt>
                  <dd>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/Twitter"
                      class="
                        text-green-600
                        hover:text-green-800
                        dark:hover:text-green-400
                      "
                      >@Twitter</a
                    >
                  </dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <nuxt-content :document="article" class="prose"/>
    <footer>
      <div
        class="
          text-sm
          font-medium
          leading-5
          divide-gray-200
          xl:divide-y
          dark:divide-gray-700
          xl:col-start-1 xl:row-start-2
        "
      >
        <div class="py-4 xl:py-8">
          <h2
            class="
              text-xs
              tracking-wide
              text-gray-500
              uppercase
              dark:text-gray-400
            "
          >
            Tags
          </h2>
          <div class="flex flex-wrap">
            <ItemTag
            v-for="(tag,index ) in article.tags"
            :key="index"
            :tag="tag"
              class="
                mr-3
                text-sm
                font-medium
                uppercase
                text-primary-500
                hover:text-primary-600
                dark:hover:text-primary-400
              "
              href="/tags/multi-author"
              />
            
          </div>
        </div>
        <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          <div>
            <h2
              class="
                text-xs
                tracking-wide
                text-gray-500
                uppercase
                dark:text-gray-400
              "
            >
              Previous Article
            </h2>
           
              <nuxt-link :to="article.prev_link" class="text-green-500
                hover:text-green-600
                dark:hover:text-reen-400"
                >{{article.prev_title}}</nuxt-link
              >
         
          </div>
          <div>
            <h2
              class="
                text-xs
                tracking-wide
                text-gray-500
                uppercase
                dark:text-gray-400
              "
            >
              Next Article
            </h2>
               <nuxt-link :to="article.next_link"
               class=" text-green-500
                hover:text-green-600
                dark:hover:text-green-400"
                >{{article.next_title}}</nuxt-link
              >
          </div>
        </div>
      </div>
      <nuxt-link to="/blog" class="text-green-500 hover:text-green-600 dark:hover:text-green-400 pt-4 xl:pt-8">
        ← Back to the blog
      </nuxt-link>
     
    </footer>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
  methods:{
    getDate(date){
      console.log(date)
      return new Date(date).toLocaleString('en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
      )
    }
  }
};
</script>
<style>
.blog-list-link {
  text-decoration: none;

  @apply dark:text-white text-black;
}

.blog-list-link:hover {
  color: rgb(92, 148, 252) !important;
}

.blog-title {
  font-size: 48px;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  .blog-title {
    font-size: 36px;
  }
}

.blog-description {
  font-weight: 400;
  font-style: italic;
}

.blog-details {
  margin-top: 30px;
  margin-bottom: 40px;
}

.blog-time {
  font-size: 15px;
  font-weight: 300;
}
.nuxt-content blockquote{
  @apply bg-pink-600 bg-opacity-20 rounded-md pl-2 pr-2 pt-2 pb-1 border-l-2; 
}
.nuxt-content h1 {
  font-weight: 500;
  font-size: 34px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
  @apply dark:text-white text-black;
}
.nuxt-content h2 {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
  @apply dark:text-white text-black;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 22px;
   @apply dark:text-white text-black;
}

.nuxt-content h4 {
  font-weight: 400;
  font-size: 18px;
   @apply dark:text-white text-black;
}
.nuxt-content h5 {
  font-weight: 400;
  font-size: 16px;
   @apply dark:text-white text-black;
}
.nuxt-content h6 {
  font-weight: 400;
  font-size: 12px;
   @apply dark:text-white text-black;
}

.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
   @apply dark:text-white text-black;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  border-radius: 3px;
  font-family: Consolas, Roboto Mono, monospace;
  @apply bg-pink-500 bg-pink-300 bg-opacity-10 text-pink-800
}

.nuxt-content ul {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  @apply dark:text-white text-black 
}

.v-application code {
  all: initial;
  all: unset;
}

.v-application a {
  text-decoration: none;
}

.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 16px;
  position: relative;
  z-index: 1;
  border-radius: 6px;
}

.nuxt-content-highlight > .filename {
  font-family: Roboto;
  right: 0;
  top: 0;
  position: absolute;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.5rem;
}

.nuxt-content pre {
  position: static;
  border-radius: 6px;
  font-family: Consolas;
  font-size: 16px;
  padding: 20px;
}

code[class*="language-"],
pre[class*="language-"] {
  font-size: 16px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  color: #c3cee3;
  font-family: Consolas, Roboto Mono, monospace;
  font-size: 1em;
  line-height: 1.5em;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  margin-bottom: 15px;
}
</style>