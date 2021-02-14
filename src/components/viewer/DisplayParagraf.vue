<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisplayParagraf",
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
  <div class="my-6" v-html="props.body"></div>
</template>