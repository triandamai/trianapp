<template>
  <div
    class="text-start dark:bg-gray-900 dark:text-gray-400"
    id="content-about"
  >
    <div class="px-16">
      <h1 class="font-extrabold text-5xl mb-4">About</h1>
      <h3 class="mb-5">
        Software developer with over 3 of experience with Android. I am a mobile
        developer of Cexup Telemedhicine, the best company of healthcare
        solution.
      </h3>
      <h2 class="font-bold text-3xl mb-4">Contact me</h2>
      <ul>
        <li>
          Email:<a href="#" target="blank" class="underline"
            >triandamai@gmail.com</a
          >
        </li>
        <li>
          Twitter:<a href="#" target="blank" class="underline">@TrianDN_</a>
        </li>
        <li><a href="#" target="blank" class="underline">LinkedIn</a></li>
        <li><a href="#" target="blank" class="underline">Github</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped>
#content {
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>
