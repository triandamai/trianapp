<template>
  <SectionContent title="Projects Showcase">
        <ItemBlog v-for="(item,index) in data" :date="item.publishedAt" :title="item.title" :key="item.slug"
            :description="item.description" :tags="item.tags" :path="'/projects/'+item.slug" />
    </SectionContent>
</template>
<script>
export default {
  head () {
    return {
      title: 'About Trian Damai - Trian.app',
      meta: [
        { hid: 'description', name: 'description', content: 'About Trian Damai' }
      ]
    }
  },
  async asyncData(ctx){
    const data = await ctx.$content('projects')
                  .only([
                  'title','description','slug','createdAt','updatedAt','tags'
                  ])
                  .sortBy('createdAt','desc')
                  .fetch()

  

    return{data}

  }
}
</script>