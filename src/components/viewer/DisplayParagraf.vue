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
  <div class="pb-6" v-html="props.body"></div>
</template>