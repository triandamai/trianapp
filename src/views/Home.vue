<template>
  <div class="bg-white dark:bg-black">
    <button class="bg-black dark:bg-white" @click="toggleTheme">toogle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ThemeActionTypes } from "@/store/module/action-type";

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    const toggleTheme = () => {
      store.dispatch(ThemeActionTypes.INIT_THEME, "");
    };
    return { toggleTheme };
  },
});
</script>
