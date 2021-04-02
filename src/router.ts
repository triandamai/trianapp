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
      path: "/posts",
      name: "Posts",
      component: () => import("./pages/Posts.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./pages/About.vue"),
    },
    {
      path: "/post",
      name: "Post",
      component: () => import("./pages/Post.vue"),
    },
    {
      path: "/projects",
      name: "Post",
      component: () => import("./pages/Projects.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("./pages/NotFound.vue"),
    },
  ],
});
