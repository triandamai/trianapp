<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListItemSection",
});
</script>
<template>
  <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
    <slot></slot>
  </div>
</template>