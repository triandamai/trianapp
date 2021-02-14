import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { store, key } from "@/store";
import { getUser } from "@/store/LocalData";

/*eslint-disable*/

import "./registerServiceWorker";
import "./assets/tailwind.css";

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
});
const app = createApp(App);

app.use(store, key);
app.use(router);

app.mount("#app");
