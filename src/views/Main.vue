<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, watch } from "vue";

import { useStore } from "@/store";
import { ThemeActionTypes } from "@/store/module/action-types";
import { dbTutorial } from "@/store/firbaseDatabase";

import { DocumentMutationTypes } from "@/store/module/mutation-types";
export default defineComponent({
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
    const listenTutorial = () => {
      dbTutorial.onSnapshot((doc) => {
        doc.docChanges().forEach((change) => {
          if (change.type == "added") {
            store.commit(DocumentMutationTypes.ADD_TUTORIAL, change.doc.data());
          }
          if (change.type == "removed") {
            store.commit(
              DocumentMutationTypes.REMOVE_TUTORIAL,
              change.doc.data()
            );
          }
          if (change.type == "modified") {
            store.commit(
              DocumentMutationTypes.CHANGE_TUTORIAL,
              change.doc.data()
            );
          }
        });
      });
    };
    onMounted(() => {
      listenTutorial();
    });
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
  <div
    class="flex flex-col flex-grow h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900"
  >
    <nav-bar class="bg-gray-50 dark:bg-gray-800" v-on:theme="changeTheme" />
    <router-view class="flex-1" />
    <bottom-navigation class="block md:hidden lg:hidden" />
    <Footer class="hidden md:block lg:block flex-2" />
  </div>
</template>
