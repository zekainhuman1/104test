exports.ids = [6];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("537f0e7f", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item_brand .title{color:#000;font-size:16px;font-weight:500;margin-top:15px;text-align:center}.item_brand{align-items:center;border-radius:8px;box-shadow:0 5.39583px 15.5556px rgba(0,0,0,.004),0 4.93333px 14.2222px rgba(0,0,0,.017),0 4.1625px 12px rgba(0,0,0,.028),0 3.08333px 8.88889px rgba(0,0,0,.057),0 1.69583px 4.88889px rgba(0,0,0,.084),0 0 0 rgba(0,0,0,.1);cursor:pointer;display:flex;flex-direction:column;height:176px;margin-bottom:25px;padding-top:20px;width:185px}.tab-1,.tab-2{display:flex;flex-wrap:wrap;justify-content:space-around;margin-top:20px}.item_brand img{height:100px;width:100px}.tabs-controller .tab-button{cursor:pointer;font-size:20px;font-weight:600;margin-right:20px}.active{color:#f38f00}.container{display:flex;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;width:100%}.tabs-controller{display:flex;margin-top:25px}.tabs{flex-direction:column;margin-bottom:25px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs_cont.vue?vue&type=template&id=b6b7c5e4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tabs container"
  }, [_vm._ssrNode("<div class=\"tabs-controller\"><div" + _vm._ssrClass("tab-button", {
    active: _vm.activeTab === 'tab1'
  }) + ">Нові категорії</div> <div" + _vm._ssrClass("tab-button", {
    active: _vm.activeTab === 'tab2'
  }) + ">Бренди</div></div> <div class=\"tab-1\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'tab1' ? '' : 'none'
  }) + "><div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-08-16_113213804.png\" alt> <span class=\"title\">Ноутбуки та комп’ютери</span></div> <div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-08-16_113731642.png\" alt> <span class=\"title\">Вбудовувана техніка</span></div> <div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/21634011.jpeg\" alt> <span class=\"title\">Стационарные</span></div> <div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-08-16_113655239.png\" alt> <span class=\"title\">Побутова техніка</span></div> <div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-08-16_113759476.png\" alt> <span class=\"title\">Техніка для кухні</span></div> <div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/categories/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2022-08-16_113316622.png\" alt> <span class=\"title\">Монітори</span></div></div> <div class=\"tab-2\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'tab2' ? '' : 'none'
  }) + "><div class=\"item_brand\"><img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/brands/lg.png\" alt> <span class=\"title\">Foot Locker</span></div> <div class=\"item_brand\"><img alt> <span class=\"title\">3M</span></div> <div class=\"item_brand\"><img alt> <span class=\"title\">Mastercard</span></div> <div class=\"item_brand\"><img alt> <span class=\"title\">Uber</span></div> <div class=\"item_brand\"><img alt> <span class=\"title\">Hilton</span></div> <div class=\"item_brand\"><img alt> <span class=\"title\">McDonald's</span></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tabs_cont.vue?vue&type=template&id=b6b7c5e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs_cont.vue?vue&type=script&lang=js&
/* harmony default export */ var tabs_contvue_type_script_lang_js_ = ({
  data() {
    return {
      activeTab: 'tab1' // Установка вкладки по умолчанию
    };
  }
});
// CONCATENATED MODULE: ./components/tabs_cont.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tabs_contvue_type_script_lang_js_ = (tabs_contvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/tabs_cont.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tabs_contvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32c1aade"
  
)

/* harmony default export */ var tabs_cont = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tabs-cont.js.map