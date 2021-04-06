import { createApp } from "vue";
import { useTitle } from "@vueuse/core";
import App from "./App.vue";
import { router } from "./router";

import "virtual:windi.css";
import "./assets/highlight.css";
import.meta.env.VITE_APP_TITTLE;

router.beforeEach((toRoute: any, fromRoute, next) => {
  useTitle(toRoute.meta.title);
  next();
});
const app = createApp(App);
app.use(router);
app.mount("#app");
