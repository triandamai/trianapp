import { createApp } from "vue";
import { useTitle } from "@vueuse/core";
import App from "./App.vue";
import { router } from "./router";
import "virtual:windi.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-scss";

import "prismjs/themes/prism-dark.css";

import "./assets/prism-synthwave.css";
import.meta.env.VITE_APP_TITTLE;

router.beforeEach((toRoute: any, fromRoute, next) => {
  useTitle(toRoute.meta.title);
  next();
});
const app = createApp(App);
app.use(router);
app.mount("#app");
