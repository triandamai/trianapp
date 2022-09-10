<template>
  <SectionContent title="Read">
    <article class="py-10 lg:py-16">
      <div class="lg:px-8">
        <div class="lg:max-w-4xl">
          <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <TitleBlog :title="data.title" :tags="data.tags" :description="data.description" :date="data.date" />
            <hr class="my-12 border-gray-200">
            <div>
              <nuxt-content :document="data" class="prose" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </SectionContent>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const data = await $content('blogs', params.slug).fetch()

    return { data }
  }
}
</script>
<style>
.blog-list-link {
  text-decoration: none;
  @apply dark: text-white text-black;
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
  @apply dark: text-white text-black;
}

.nuxt-content h2 {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
  @apply dark: text-white text-black;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 22px;
  @apply dark: text-white text-black;
}

.nuxt-content h4 {
  font-weight: 400;
  font-size: 18px;
  @apply dark: text-white text-black;
}

.nuxt-content h5 {
  font-weight: 400;
  font-size: 16px;
  @apply dark: text-white text-black;
}

.nuxt-content h6 {
  font-weight: 400;
  font-size: 12px;
  @apply dark: text-white text-black;
}

.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  @apply dark: text-white text-black;
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
  @apply dark: text-white text-black;
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

.nuxt-content-highlight>.filename {
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