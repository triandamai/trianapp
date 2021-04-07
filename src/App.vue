<template>
  <main id="main">
    <nav-bar />

    <router-view class="flex-1" v-slot="{ Component }">
      <transition
        enter-active-class="transition ease-out duration-400 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-400"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        name="fade"
      >
        <component :is="Component" /></transition
    ></router-view>

    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useTheme } from "./utils/theme";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import hljs from "highlight.js";

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
  name: "App",
  setup: () => {
    const { theme } = useTheme();

    onMounted(() => {
      // hljs.highlight();
    });
    watch(theme, (newval) => {
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.remove("light");
      console.log(newval.theme);
      document.querySelector("html")?.classList.add(newval.theme);
    });
    return {
      ...useTheme(),
    };
  },
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
