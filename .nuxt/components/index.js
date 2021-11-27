export const Author = () => import('../../components/Author.vue' /* webpackChunkName: "components/author" */).then(c => wrapFunctional(c.default || c))
export const ContentNextArticle = () => import('../../components/ContentNextArticle.vue' /* webpackChunkName: "components/content-next-article" */).then(c => wrapFunctional(c.default || c))
export const ContentPrevArticle = () => import('../../components/ContentPrevArticle.vue' /* webpackChunkName: "components/content-prev-article" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const ItemBlog = () => import('../../components/ItemBlog.vue' /* webpackChunkName: "components/item-blog" */).then(c => wrapFunctional(c.default || c))
export const ItemProject = () => import('../../components/ItemProject.vue' /* webpackChunkName: "components/item-project" */).then(c => wrapFunctional(c.default || c))
export const ItemTag = () => import('../../components/ItemTag.vue' /* webpackChunkName: "components/item-tag" */).then(c => wrapFunctional(c.default || c))
export const MobileNav = () => import('../../components/MobileNav.vue' /* webpackChunkName: "components/mobile-nav" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const SocialIcon = () => import('../../components/SocialIcon.vue' /* webpackChunkName: "components/social-icon" */).then(c => wrapFunctional(c.default || c))
export const TagPost = () => import('../../components/TagPost.vue' /* webpackChunkName: "components/tag-post" */).then(c => wrapFunctional(c.default || c))
export const TagsArticle = () => import('../../components/TagsArticle.vue' /* webpackChunkName: "components/tags-article" */).then(c => wrapFunctional(c.default || c))
export const ThemeSwitch = () => import('../../components/ThemeSwitch.vue' /* webpackChunkName: "components/theme-switch" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
