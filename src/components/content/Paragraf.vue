<template>
  <p v-html="body" class="dark:bg-gray-900 dark:text-gray-50"></p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["body"],
  setup({ body }) {
    return { body };
  },
});
</script>
