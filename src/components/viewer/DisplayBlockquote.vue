<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisplayBlockquote",
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
  <div
    class="pl-4 my-6 italic bg-gray-200 border-l-4 border-gray-500 dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-10"
    v-html="props.body"
  ></div>
</template>