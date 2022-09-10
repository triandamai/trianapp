<script setup lang="ts">

const { data, pending, refresh } = await useAsyncData('blogs', () => queryContent('blogs').find())
onMounted(() => {
    refresh()
})
</script>
<template>
    <SectionContent title="Blogs">
        <template v-if="pending" #loading>
            <h1>LOADING</h1>
        </template>

        <ItemBlog v-for="(item,index) in data" :date="item.publishedAt" :title="item.title" :key="item.slug"
            :description="item.description" :tags="item.tags" :path="'/blogs/'+item.slug" />
    </SectionContent>
</template>ß