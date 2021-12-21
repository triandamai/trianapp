<template>
  <div class="flex items-center mb-3 last:mb-0">
    <img
      height="48"
      width="48"
      class="rounded-full border-white border-2"
      src="https://avatars.githubusercontent.com/u/41132846?v=4"
      alt="sah"
    />

    <div>
      <span
        class="font-medium text-gray-700 dark:text-white text-sm ml-1 block"
        >{{ author }}</span
      >
      <a
        class="text-sm ml-1 block text-green-400"
        href="https://twitter.com/triandamaiN"
        >Twitter</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["author"],
};
</script>