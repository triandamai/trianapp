<template>
  <h1 class="text-2xl md:text-3xl dark:text-gray-300">{{ body }}</h1>
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
