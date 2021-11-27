<template>
    <footer class="
    invisible 
    xl:visible 
    lg:visible 
    md:invisible 
    sm:invisible 
    xs:invisible" >
      <div
        class="
         text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700
        "
      >
        <TagsArticle :tags="[]"/>
        <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          <ContentPrevArticle/>
          <ContentNextArticle/>
        </div>
      </div>
      <nuxt-link to="/blog" class="text-green-500 hover:text-green-600 dark:hover:text-green-400 pt-4 xl:pt-8">
        ← Back to the blog
      </nuxt-link>
     
    </footer>
</template>