<template>
  <ssh-pre language="pug" label="Terminal" :dark="true"> {{ body }} </ssh-pre>
</template>
<script>
import { defineComponent } from "vue";
import SshPre from "simple-syntax-highlighter";
import "../../assets/highlight.css";

export default defineComponent({
  props: ["body"],
  components: {
    SshPre,
  },
  setup({ body }) {
    return {
      body,
    };
  },
});
</script>
