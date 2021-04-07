import { createApp } from "vue";
import { useTitle } from "@vueuse/core";
import App from "./App.vue";
import { router } from "./router";
import hljs from "highlight.js";

import "virtual:windi.css";
import "highlight.js/styles/androidstudio.css";

import.meta.env.VITE_APP_TITTLE;

router.beforeEach((toRoute: any, fromRoute, next) => {
  useTitle(toRoute.meta.title);
  next();
});
const app = createApp(App);
app.use(router);
app.directive("highlightjs", {
  beforeMount(el, binding, vnode) {
    let targets = el.querySelectorAll("code");
    targets.classList?.add("text-sm");
    targets.forEach((target: any) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target);
    });
  },
  updated(el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll("code");
    targets.classList?.add("text-sm");
    targets.forEach((target: any) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  },
});

app.mount("#app");
