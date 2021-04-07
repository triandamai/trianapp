<template>
  <div>
    <span class="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2">{{
      body.label
    }}</span>
    <pre v-highlightjs="body.body"><code :class="body.lang"></code></pre>
  </div>
</template>
<script>
import { defineComponent } from "vue";

// import VueEmbedGist from "vue-embed-gist";
export default defineComponent({
  props: ["body"],
  components: {
    // VueEmbedGist,
  },
  setup({ body }) {
    return { body };
  },
});
</script>
<style>
.hljs {
  @apply text-sm;
}
</style>
