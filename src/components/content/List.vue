<template>
  <ul>
    <li class="text-sm my-2" v-for="(item, index) in body" :key="index">
      - {{ item }}
    </li>
  </ul>
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
