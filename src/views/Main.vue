<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";

import { dbTutorial } from "@/store/firbaseDatabase";
import { usetheme } from "@/store/ThemeRepository";

export default defineComponent({
  name: "App",
  setup() {
    const { theme, setTheme } = usetheme();

    const changeTheme = () => {
      setTheme(theme.value == "light" ? "dark" : "light");
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
  <main id="main">
    <nav-bar id="navbarmain" v-on:theme="changeTheme" />
    <router-view class="flex-1" />
    <bottom-navigation id="bottomnavmain" />
    <Footer id="footermain" />
  </main>
</template>

