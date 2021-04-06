<template>
  <ssh-pre :language="body.lang" :label="body.label" :dark="true">
    {{ body.body }}
  </ssh-pre>
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
