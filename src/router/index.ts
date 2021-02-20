import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     redirect: "/main/tutorial"
//   },
//   {
//     path: "/main",
//     component: () => import("@/views/Main.vue"),
//     children: [
//       {
//         path: "tutorial",
//         name: "Tutorial",
//         component: () => import("@/views/Tutorial.vue")
//       },

//       {
//         path: "about",
//         name: "About",
//         component: () => import("@/views/About.vue")
//       },
//       {
//         path: "read/:id",
//         name: "Read",
//         component: () => import("@/views/Read.vue")
//       }
//     ]
//   },
//   {
//     path: "/auth",
//     component: () => import("@/views/Auth.vue"),
//     children: [
//       {
//         path: "",
//         redirect: "/auth/login"
//       },
//       {
//         path: "login",
//         name: "Login",
//         component: () => import("@/views/auth/Login.vue")
//       },
//       {
//         path: "register",
//         name: "Register",
//         component: () => import("@/views/auth/Register.vue")
//       }
//     ]
//   },
//   {
//     path: "/dashboard",
//     component: () => import("@/views/Dashboard.vue"),
//     meta: {
//       requiresAuth: false
//     },
//     children: [
//       {
//         path: "",
//         redirect: "/dashboard/tutorial"
//       },
//       {
//         path: "artikel",
//         name: "Home",
//         component: () => import("@/views/dashboard/Artikel.vue")
//       },
//       {
//         path: "tutorial",
//         name: "Tutorial",
//         component: () => import("@/views/dashboard/Tutorial.vue")
//       },
//       {
//         path: "profil",
//         name: "Profil",
//         component: () => import("@/views/dashboard/Profil.vue")
//       },
//       {
//         path: "addtutorial",
//         name: "AddTutorial",
//         component: () => import("@/views/NewPost.vue")
//       },
//       {
//         path: "addartikel",
//         name: "AddArtikel",
//         component: () => import("@/views/NewPost.vue")
//       }
//     ]
//   }
// ];
export const menu: Array<any> = [
  {
    name: "Tutorial",
    path: "/main/tutorial"
  },
  {
    name: "Artikel",
    path: "/main/artikel"
  },
  { name: "About", path: "/main/about" }
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("@/views/Main.vue"),
    children: [
      {
        path: "",
        redirect: "/main/tutorial"
      },
      {
        path: "tutorial",
        name: "Tutorial",
        component: () => import("@/views/Tutorial.vue")
      },
      {
        path: "artikel",
        name: "Artikel",
        component: () => import("@/views/Article.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue")
      },
      {
        path: "read/:id",
        name: "Read",
        component: () => import("@/views/Read.vue")
      }
    ]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue")
    // children: [
    //   { path: "", redirect: "/dashboard/tutorial" },
    //   {
    //     path: "tutorial",
    //     name: "DashboardTutor",
    //     component: () => import("@/views/dashboard/Tutorial.vue")
    //   },
    //   {
    //     path: "artikel",
    //     name: "DashboardArtikel",
    //     component: () => import("@/views/dashboard/Artikel.vue")
    //   },
    //   {
    //     path: "profil",
    //     name: "Profil",
    //     component: () => import("@/views/dashboard/Profil.vue")
    //   },
    //   {
    //     path: "new",
    //     name: "NewPost",
    //     component: () => import("@/views/NewPost.vue")
    //   }
    // ]
  },
  {
    path: "/auth",
    component: () => import("@/views/Auth.vue"),
    children: [
      { path: "", redirect: "/auth/login" },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/auth/Login.vue")
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/auth/Register.vue")
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
