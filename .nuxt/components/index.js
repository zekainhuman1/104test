export { default as ArrivedComp } from '../..\\components\\arrived_comp.vue'
export { default as Footerr } from '../..\\components\\footerr.vue'
export { default as HeaderBottom } from '../..\\components\\header_bottom.vue'
export { default as Leaflet } from '../..\\components\\leaflet.vue'
export { default as NewIncom } from '../..\\components\\new_incom.vue'
export { default as Productcard } from '../..\\components\\productcard.vue'
export { default as Slider } from '../..\\components\\slider.vue'
export { default as TabsCont } from '../..\\components\\tabs_cont.vue'

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
