import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Article",
    component: () => import("@/views/Article.vue")
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: () => import("@/views/Tutorial.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/read/:id",
    name: "Read",
    component: () => import("@/views/Read.vue")
  },
  {
    path: "/new",
    name: "NewPost",
    component: () => import("@/views/NewPost.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
