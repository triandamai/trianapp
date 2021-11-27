<template>
  <div
    class="
      pt-6
      pb-10
      xl:pt-11 xl:dark:border-gray-700
    "
  >
    <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
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
              <dd class="text-gray-900 dark:text-gray-100">Trian Damai</dd>
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
    <TagsArticle :tags="[]"/>
     <ContentPrevArticle/>
    <ContentNextArticle/>
     <nuxt-link to="/blog" class="text-green-500 hover:text-green-600 dark:hover:text-green-400 pt-4 xl:pt-8">
        ← Back to the blog
      </nuxt-link>
  </div>
</template>