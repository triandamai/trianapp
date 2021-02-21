<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useBlog } from "@/store/BlogRepository";

export default defineComponent({
  name: "App",
  setup() {
    const { listenTutorial } = useBlog();

    onMounted(() => {
      listenTutorial();
    });
  },
});
</script>
<template>
  <main id="main">
    <nav-bar id="navbarmain" />
    <router-view class="flex-1" />
    <bottom-navigation id="bottomnavmain" />
    <Footer id="footermain" />
  </main>
</template>

