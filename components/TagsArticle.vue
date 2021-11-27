<template>
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
            v-for="(tag,index ) in tags"
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
</template>
<script>
export default {
    props:[
        'tags'
    ]
}
</script>