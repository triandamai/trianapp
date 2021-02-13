<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    body: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
<template>
  <code
    class="py-2 pl-2 pr-6 my-6 ml-6 text-gray-800 bg-gray-300 border-l-4 border-yellow-600 border-opacity-50 rounded-sm dark:border-opacity-30 dark:bg-gray-800 dark:text-gray-100"
    v-html="props.body"
  ></code>
</template>