<template>
  <main id="main">
    <nav-bar />
    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-300 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      name="fade"
    >
      <router-view class="flex-1" />
    </transition>
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useTheme } from "./utils/theme";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
  name: "App",
  setup: () => {
    const { theme } = useTheme();
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
