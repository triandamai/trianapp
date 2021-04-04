<template>
  <pre>
      <code class="languange-js">
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  props: ["body", "lang"],
  setup({ body, lang }) {
    return {
      body,
      lang,
    };
  },
});</code>
</pre>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["body", "lang"],
  setup({ body, lang }) {
    return {
      body,
      lang,
    };
  },
});
</script>
