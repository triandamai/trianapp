<script setup lang="ts">

const data= await queryContent('blogs').find()

console.log(data)
</script>
<template>
    <SectionContent title="Blogs">
        <ItemBlog v-for="(item,index) in data" :date="item.publishedAt" :title="item.title" :key="item.slug"
            :description="item.description" :tags="item.tags" :path="'/blogs/'+item.slug" />
    </SectionContent>
</template>ß