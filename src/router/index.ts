import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Main.vue"),
    children: [
      {
        path: "",
        redirect: "/article"
      },
      {
        path: "/article",
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
    ]
  },
  {
    path: "/auth",
    component: () => import("@/views/Auth.vue"),
    children: [
      {
        path: "",
        redirect: "/auth/login"
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Login.vue")
      }
    ]
  },
  {
    path: "/dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "",
        redirect: "/dashboard/home"
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/dashboard/Home.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
