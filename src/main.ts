import { createApp } from "vue";
import App from "./App.vue";
import { upperFirst, camelCase } from "lodash";

import router from "./router";
import { getCurrentUser } from "@/store/firbaseDatabase";

/*eslint-disable*/

import "./registerServiceWorker";
import "./assets/tailwind.css";

/***
 *
 *
 */
const requireComponent = require.context("./components", true, /[\w-]+\.vue$/);

router.beforeEach(async (to, from, next) => {
  console.log(await getCurrentUser());
  if (to.meta.requiresAuth && !(await getCurrentUser())) {
    next({ path: "/auth/login" });
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

app.use(router);

app.mount("#app");
