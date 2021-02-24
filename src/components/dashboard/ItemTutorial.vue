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
    class="relative grid-cols-5 bg-white rounded-lg shadow-sm sm:grid p-7 lg:max-w-2xl sm:p-4 lg:col-span-2 lg:ml-20"
  >
    <img
      :src="props.data.thumbnail"
      alt="Just a flower"
      class="w-full rounded-lg"
    />
    <div class="self-center col-span-3 pt-5 sm:pt-0 sm:pl-10">
      <h2 class="text-xl font-bold text-gray-800 capitalize">
        {{ props.data.title }}
      </h2>
      by
      <a href="#" class="inline-block pt-2 underline capitalize">{{
        props.data.username
      }}</a>
    </div>
    <div class="justify-self-end">
      <img
        src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Bookmark-256.png"
        alt="Bookmark"
        class="absolute w-8 top-3 right-3 sm:relative sm:top-0 sm:right-0"
      />
    </div>
  </article>
</template>