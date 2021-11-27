export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ItemBlog } from '../../components/ItemBlog.vue'
export { default as ItemProject } from '../../components/ItemProject.vue'
export { default as ItemTag } from '../../components/ItemTag.vue'
export { default as MobileNav } from '../../components/MobileNav.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ThemeSwitch } from '../../components/ThemeSwitch.vue'

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
