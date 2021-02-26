<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemTutorial",
  props: {
    data: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>
<template>
  <article
    class="relative grid-cols-5 mx-6 text-xs bg-white rounded-lg shadow-sm sm:grid p-7 sm:p-4 lg:col-span-2 dark:bg-gray-900"
  >
    <img
      :src="props.data.thumbnail"
      alt="Just a flower"
      class="w-full rounded-lg"
    />

    <div class="self-center col-span-3 pt-5 sm:pt-0 sm:pl-10">
      <h2 class="text-lg font-bold text-gray-800 capitalize dark:text-gray-100">
        {{ props.data.title }}
      </h2>

      <a
        href="#"
        class="inline-block pt-2 underline capitalize dark:text-gray-200"
        >{{ props.data.username }}</a
      >
      <div class="flex flex-wrap w-full mt-5">
        <button
          class="flex px-2 py-1 text-yellow-600 bg-yellow-200 rounded-md dark:bg-opacity-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
        <button
          class="flex px-2 py-1 mx-2 text-red-600 bg-red-300 rounded-md dark:bg-opacity-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  </article>
</template>