<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";

import { useStore } from "@/store";
import { ThemeActionTypes } from "@/store/module/action-types";
//comp
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
export default defineComponent({
  components: { NavBar, Footer, BottomNavigation },
  name: "App",
  setup() {
    const store = useStore();

    const setTheme = () => {
      document.querySelector("html")?.classList.remove("light");
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.add(store.state.theme);
    };
    const changeTheme = () => {
      store.dispatch(
        ThemeActionTypes.INIT_THEME,
        store.state.theme == "light" ? "dark" : "light"
      );
      setTheme();
    };

    onBeforeMount(() => {
      store.dispatch(ThemeActionTypes.INIT_THEME, null);
      setTheme();
    });

    return {
      changeTheme,
    };
  },
});
</script>
<template>
  <nav-bar v-on:theme="changeTheme" />
  <router-view />
  <bottom-navigation class="block md:hidden lg:hidden" />
  <Footer class="hidden md:block lg:block" />
</template>


