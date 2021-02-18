import { createApp } from "vue";
import App from "./App.vue";
import { upperFirst, camelCase } from "lodash";

import router from "./router";
import { store, key } from "@/store";
import { getUser } from "@/store/LocalData";

/*eslint-disable*/

import "./registerServiceWorker";
import "./assets/tailwind.css";

import draggable from "vue-draggable-next";

const requireComponent = require.context("./components", true, /[\w-]+\.vue$/);

/***
 *
 *
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = getUser();
    if (user) next();
    else next({ path: "/auth/login" });
  } else {
    next();
  }

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});
const app = createApp(App);

requireComponent.keys().forEach(fileName => {
  //get comp config
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      componentConfig.default.name.replace(/^\.\//, "").replace(/\.\w+$/, "")
    )
  );

  app.component(componentName, componentConfig.default || componentConfig);
});
app.component("draggable", draggable);

app.use(store, key);
app.use(router);

app.mount("#app");
