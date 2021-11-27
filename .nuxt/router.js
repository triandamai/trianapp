import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e5f35f8 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _ecbfa648 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _5879540a = () => interopDefault(import('../pages/tags.vue' /* webpackChunkName: "pages/tags" */))
const _663a56bf = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _4cfd1040 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _4e5f35f8,
    name: "blog"
  }, {
    path: "/projects",
    component: _ecbfa648,
    name: "projects"
  }, {
    path: "/tags",
    component: _5879540a,
    name: "tags"
  }, {
    path: "/article/:slug?",
    component: _663a56bf,
    name: "article-slug"
  }, {
    path: "/",
    component: _4cfd1040,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
