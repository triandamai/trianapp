import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("./pages/Main.vue"),
    },
    {
      path: "/Posts",
      name: "Posts",
      component: () => import("./pages/Posts.vue"),
    },
    {
      path: "/About",
      name: "About",
      component: () => import("./pages/About.vue"),
    },
    {
      path: "/Post",
      name: "Post",
      component: () => import("./pages/Post.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("./pages/NotFound.vue"),
    },
  ],
});
