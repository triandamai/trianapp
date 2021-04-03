import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("./pages/Main.vue"),
      meta: {
        title: "Main::Trian damai",
      },
    },
    {
      path: "/posts",
      name: "Posts",
      component: () => import("./pages/Posts.vue"),
      meta: {
        title: "Posts::Trian damai",
      },
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./pages/About.vue"),
      meta: {
        title: "About::Trian damai",
      },
    },
    {
      path: "/post",
      name: "Post",
      component: () => import("./pages/Post.vue"),
      meta: {
        title: "Post::Trian damai",
      },
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./pages/Projects.vue"),
      meta: {
        title: "Projects::Trian damai",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("./pages/NotFound.vue"),
      meta: {
        title: "404::Trian damai",
      },
    },
  ],
});
