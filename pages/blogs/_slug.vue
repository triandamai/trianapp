<template>
  <SectionContent title="Read">
    <article class="py-10 lg:py-16">
      <div class="lg:px-8">
        <div class="lg:max-w-4xl">
          <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <TitleBlog :title="data.title" :tags="data.tags" :description="data.description" :date="data.date" />
            <hr class="my-12 border-gray-200">
            <div>
              <nuxt-content v-if="data.length > 0" :document="data[0]" class="prose" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </SectionContent>
</template>
<script>
import Prism from "prismjs"
export default {
  mounted(){
    Prism.highlightAll()


  },
  async asyncData({ $content, params }) {
    const data = await $content('blogs').where({
      slug:params.slug
    }).fetch()

    return { data }
  },
 
}
</script>