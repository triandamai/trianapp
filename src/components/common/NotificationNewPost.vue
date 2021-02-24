<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotificationNewPost",
});
</script>
<template>
  <div
    class="flex justify-between px-5 py-2 mx-10 bg-gray-900 rounded-sm justify-items-center"
  >
    <label class="flex flex-wrap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="items-center w-6 h-full text-yellow-400"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span class="h-full ml-2 text-yellow-400"
        >Tutorial Berhasil Diupload</span
      >
    </label>
    <button class="px-5 py-1 text-yellow-500 bg-gray-800 rounded-sm">
      Lihat
    </button>
  </div>
</template>