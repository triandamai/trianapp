<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemTutorial",
});
</script>
<template>
  <article
    class="relative grid-cols-5 bg-white rounded-lg shadow-sm sm:grid p-7 lg:max-w-2xl sm:p-4 lg:col-span-2 lg:ml-20"
  >
    <img
      src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Just a flower"
      class="w-full rounded-lg"
    />
    <div class="self-center col-span-3 pt-5 sm:pt-0 sm:pl-10">
      <h2 class="text-xl font-bold text-gray-800 capitalize">
        hypnotherapy for motivation getting the drive back
      </h2>
      by
      <a href="#" class="inline-block pt-2 underline capitalize"
        >dorothy parks</a
      >
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