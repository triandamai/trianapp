<template>
  <div>
    <div class="flex flex-col items-center w-full">
      <div class="relative rounded overflow-hidden w-full mt-8 md:mt-0">
        <a href="/templates/reels-photography-template"
          ><img
            class="w-full"
            :src="post.image"
            alt="tailwind css components and templates"
        /></a>
        <div
          class="border-t border-color -mt-16 z-20 relative rounded-lg w-11/12 mx-auto overflow-hidden"
        >
          <div
            class="relative bg-white dark:bg-gray-900 border-l border-r rounded-lg border-color-gradient -mt-0.5 p-4 md:p-6"
          >
            <div class="flex items-center justify-between w-full">
              <div
                class="flex justify-between w-full items-start cursor-pointer"
              >
                <a
                  class="text-sm lg:text-xl md:font-black text-gray-900 dark:text-gray-50 min-h-5"
                  >{{ post.title }}</a
                ><svg
                  class="h-8 w-8 flex-shrink-0 ml-0.5 text-gray-900 dark:text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p
              class="mt-3 text-xs md:text-base font-normal leading-none text-gray-700 dark:text-gray-400"
            >
              {{ post.description }}
            </p>
            <p
              class="text-base font-semibold leading-none text-gray-600 pt-5 dark:text-gray-400"
            >
              TAGS
            </p>
            <div class="flex items-center justify-between mt-3">
              <div
                class="flex items-center p-2 border rounded border-gray-300 dark:border-gray-700"
              >
                <span v-for="(item, index) in post.tags" :key="index"
                  >&nbsp;{{ item }}</span
                >
              </div>
            </div>
            <div class="mt-7 w-full justify-end flex pb-4 sm:pb-0">
              <div class="sm:flex items-stretch w-full sm:w-auto">
                <button
                  id="0ca13bd-f5d0-abd3-ed74-00e063d5b41c"
                  class="justify-center w-full sm:w-auto flex items-center flex-shrink-0 text-white focus:outline-none bg-gradient-to-r from-red-500 to-pink-500 rounded-md py-2 px-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    /></svg
                  ><span
                    class="flex-shrink-0 ml-2 font-medium leading-none dark:text-white text-sm 2xl:text-base"
                    >Read more</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["post"],
  setup({ post }) {
    return { post };
  },
});
</script>
