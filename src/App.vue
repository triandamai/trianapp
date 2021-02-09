<template>
  <nav-bar />
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";
import { useStore } from "@/store";
import { ThemeActionTypes } from "@/store/module/action-type";
//comp
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
  components: { NavBar },
  name: "App",
  setup() {
    const store = useStore();
    // console.log(store.state.theme.theme);

    onBeforeMount(() => {
      store.dispatch(ThemeActionTypes.INIT_THEME, "");
    });
    watch(store.state.theme, (newV) => {
      document.querySelector("html")?.classList.remove("light");
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.add(newV.theme);
    });

    return {};
  },
});
</script>

