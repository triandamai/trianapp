<template>
  <article>
    <div class="py-6 md:py-12 lg:w-10/12 center md:text-center mx-auto">
      <div class="font-medium text-gray-700 dark:text-white">
        {{ getDate(article.createdAt) }}
      </div>

      <h1
        class="
          heading
          text-4xl
          md:text-6xl
          font-bold font-sans
          md:leading-tight
          text-black
          dark:text-white
        "
      >
        {{ article.title }}
      </h1>

      <h2 class="text-xl text-gray-600 dark:text-gray-100 mt-2">{{ article.description }}</h2>
    </div>
    <div class="flex flex-col pb-3 md:hidden">
      <Author :author="article.author"/>
    </div>

    <img
      width="1600"
      height="900"
      :src="article.image"
      alt="Banner article trian.app"
    />

    <div class="flex flex-col md:flex-row py-6 md:py-12">
      <div class="w-full md:w-3/12 pr-3">
        <div class="flex flex-col hidden md:flex mb-3 md:mb-6">
          <Author :author="article.author" />
        </div>
        <div class="hidden md:block">
          <TagsArticle :tags="article.tags" />
        </div>
        <div class="hidden md:block">
          <ContentPrevArticle :link="article.prev_link" :desc="article.prev_title"/>
          <ContentNextArticle :link="article.next_link" :desc="article.next_title"/>
          <nuxt-link
            to="/blog"
            class="
              text-green-500
              hover:text-green-600
              dark:hover:text-green-400
              pt-6
              xl:pt-8
            "
          >
            ← Back to the blog
          </nuxt-link>
        </div>
      </div>

      <div class="w-full md:w-9/12">
        <div class="prose">
          <nuxt-content :document="article" class="prose" />
        </div>
      </div>
    </div>

    <div class="py-6 mt-6 border-t-2 block md:hidden">
      <TagsArticle :tags="article.tags" />
    </div>
    <footer class="
    visible 
    xl:invisible 
    lg:invisible 
    md:invisible 
    sm:visible 
    xs:visible" >
      <div
        class="
         text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700
        "
      >
    
        <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          <ContentPrevArticle :link="article.prev_link" :desc="article.prev_title"/>
          <ContentNextArticle :link="article.next_link" :desc="article.next_title"/>
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
  methods: {
    getDate(date) {
      console.log(date);
      return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
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
.nuxt-content blockquote {
  @apply bg-pink-600 bg-opacity-20 rounded-md pl-2 pr-2 pt-2 border-l-2;
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
  @apply bg-pink-500 bg-pink-300 bg-opacity-10 text-pink-800;
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
  @apply dark:text-white text-black;
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