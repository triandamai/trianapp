<template>
  <main id="main">
    <nav-bar />
    <router-view class="flex-1" />
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
  name: "App",
});
</script>
<style scoped>
#main {
  @apply flex;
  @apply flex-col;
  @apply flex-grow;
  @apply h-screen;
  @apply font-mono;
  @apply h-min-screen;
}
#content {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply text-center;
}
#content-about {
  display: flex;
  align-items: center;
  justify-content: center;
}
#name {
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
