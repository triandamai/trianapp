<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisplayHeading",
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
  <h2 class="my-6 text-2xl font-semibold text-gray-800">
    {{ props.body }}
  </h2>
</template>