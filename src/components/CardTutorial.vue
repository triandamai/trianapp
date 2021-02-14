<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardTutorial",
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const stringTruncate = function (str: any, length: any) {
      const dots = str.length > length ? "..." : "";
      return str.slice(0, length) + dots;
    };
    const text = stringTruncate(props.data.description, 100);

    return {
      ...props,
      text,
    };
  },
});
</script>
<template>
  <div
    class="flex flex-col w-full p-10 mb-6 max-h-96 md:w-1/2 lg:w-1/3 md:mb-0"
  >
    <div
      class="bg-gray-100 cursor-pointer pattern-dots-md dark:bg-gray-900"
      @click="$router.push({ path: `/read/${data.id}` })"
    >
      <div
        class="p-4 text-gray-900 transform translate-x-4 -translate-y-4 bg-white rounded shadow-md dark:text-gray-100 dark:bg-gray-800 hover:translate-x-6 hover:-translate-y-6 md:translate-x-5 md:-translate-y-5 lg:translate-x-5 lg:-translate-y-5"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mb-5 text-blue-500 bg-blue-100 rounded-full"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2
            class="mb-3 font-mono text-lg font-bold break-words cursor-pointer title-font hover:underline hover:"
          >
            {{ data.title }}
          </h2>
          <p
            class="flex-wrap font-mono text-sm leading-relaxed text-justify overflow-ellipsis"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



