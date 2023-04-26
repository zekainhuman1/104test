export const ArrivedComp = () => import('../..\\components\\arrived_comp.vue' /* webpackChunkName: "components/arrived-comp" */).then(c => wrapFunctional(c.default || c))
export const Footerr = () => import('../..\\components\\footerr.vue' /* webpackChunkName: "components/footerr" */).then(c => wrapFunctional(c.default || c))
export const HeaderBottom = () => import('../..\\components\\header_bottom.vue' /* webpackChunkName: "components/header-bottom" */).then(c => wrapFunctional(c.default || c))
export const NewIncom = () => import('../..\\components\\new_incom.vue' /* webpackChunkName: "components/new-incom" */).then(c => wrapFunctional(c.default || c))
export const Slider = () => import('../..\\components\\slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const TabsCont = () => import('../..\\components\\tabs_cont.vue' /* webpackChunkName: "components/tabs-cont" */).then(c => wrapFunctional(c.default || c))

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
