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
  <div
    class="pl-4 mb-6 italic border-l-4 border-gray-500 rounded"
    v-html="props.body"
  ></div>
</template>