<template>
  <p></p>
  <!-- <ssh-pre language="pug" label="Terminal" :dark="true"> {{ body }} </ssh-pre> -->
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["body"],
  components: {
    // SshPre,
  },
  setup({ body }) {
    return {
      body,
    };
  },
});
</script>
