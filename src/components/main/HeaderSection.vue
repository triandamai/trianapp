<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderSection",
  props: {
    title: { type: String, default: "" },
  },
  setup(props) {
    return { props };
  },
});
</script>
<template>
  <div class="mb-20 text-center">
    <h1
      class="mb-4 font-mono text-4xl font-extrabold leading-10 tracking-tight title-font sm:text-5xl sm:leading-none md:text-6xl"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
    <div class="flex justify-center mt-6">
      <div class="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
    </div>
  </div>
</template>