exports.ids = [8,2,3,4,5,6];
exports.modules = Array(22).concat([
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0ebd7ada", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.bc783f5.01d6115.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/market.545b9d8.97fa755.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart2.3ba4f67.9db98ae.svg";

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_bottom{width:10%}.header_bottom .header_bottom__wrapper[data-v-278ddcd1]{align-items:center;display:flex;justify-content:space-between;margin:0 auto;padding-right:20px;position:sticky;top:0}img,video{height:auto;max-width:100%}.logo .logo_icon{margin-right:15px;width:40px}*{font-size:16px;font-weight:400}.logo .market_icon[data-v-278ddcd1]{margin-bottom:-6px;width:80px}.logo{display:flex;justify-content:center;margin-right:40px}a{color:#3e77aa;text-decoration:inherit}.catalog_btn{background-color:#f38f00;background:#f38f00;border-radius:10px;color:#fff;flex-direction:row;gap:7px;height:25px;justify-content:center;margin-right:20px;padding:10px 15px;width:116px}.catalog_btn,.header_bottom .header_catalog{align-items:center;cursor:pointer;display:flex}.header_bottom .header_catalog{position:relative}.catalog_btn .open{width:30px}.header_bottom .header_catalog span{color:#fff;font-size:18px}.catalog_btn .catalog{font-size:14px!important}.header_bottom .search{display:flex;flex-grow:1;position:relative}.concave{align-items:center;background:#f38f00;border-bottom-right-radius:5px;border-top-right-radius:5px;cursor:pointer;display:flex;height:41px;justify-content:center;position:absolute;right:0;top:1px;width:58px;z-index:1}.header_bottom .header_search{border:2px solid #f38f00;border-radius:8px;flex-grow:1;height:39px;padding-left:10px;position:relative}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}.rightconcave{background:#fff;border-bottom-right-radius:100px;border-top-right-radius:100px;height:39px;left:0;position:absolute;top:1px;width:6px}.search_img{cursor:pointer;height:26px;margin-left:8px}.header_bottom .search_list{background:#fff;border-radius:10px;box-shadow:0 100px 40px rgba(0,0,0,.01),0 56px 34px rgba(0,0,0,.05),0 25px 25px rgba(0,0,0,.09),0 6px 14px rgba(0,0,0,.1),0 0 0 rgba(0,0,0,.1);left:0;padding:10px;position:absolute;right:0;top:44px}.header_bottom .list_item{padding:3px}.header_bottom .separate{margin-left:35px;margin-top:5px;width:95%}.line{margin-top:10px}hr{border-style:inset;border-width:1px;display:block;margin:.5em auto;overflow:hidden;unicode-bidi:isolate}.header_bottom .header_controls{align-items:center;display:flex}.header_bottom .header_controls .wrap_control{position:relative}.header_bottom .header_controls .cart,.header_bottom .header_controls .compare,.header_bottom .header_controls .favorite{cursor:pointer}.header_bottom .header_controls .count{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;position:absolute;right:-15px;top:-6px;width:22px}.auth,.header_bottom .header_controls .count{background-color:#f38f00;border-radius:8px;color:#fff}.auth{cursor:pointer;font-size:14px;margin-left:30px;padding:8px 15px}.header_bottom .header_controls .control_icon{height:25px;margin-left:60px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;width:25px}.header_bottom{background-color:#fff;padding:10px 0;position:sticky;top:0;width:100%;z-index:6}.page{display:flex;flex-direction:column}.mega_menu{background-image:linear-gradient(90deg,#f3f3f3 50%,#fff 0);box-shadow:77px 81px 45px rgba(0,0,0,.01),43px 45px 38px rgba(0,0,0,.05),19px 20px 28px rgba(0,0,0,.09),5px 5px 15px rgba(0,0,0,.1),0 0 0 rgba(0,0,0,.1);display:flex;left:0;position:absolute;right:0;top:61px}.container{display:flex;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;width:100%}.mega_menu .selector{background-color:#f3f3f3;padding:15px 0 25px;width:27%}.mega_menu .groups{background-color:#fff;width:73%}.groups{display:flex;flex-direction:column;flex-wrap:wrap;height:600px;padding:20px}.active_menu:hover,.first_menu{background-color:#fff;color:#f38f00}.mega_menu .selector .item_selector{border-radius:10px 0 0 10px;cursor:pointer;font-size:14px;font-weight:500;margin-bottom:15px;padding:5px 0 5px 15px}.groups .group_item{height:-moz-fit-content;height:fit-content;margin-bottom:20px;margin-right:20px;white-space:nowrap}.groups .group_item .item_title{color:#f38f00;cursor:pointer;line-height:2.2;padding-left:10px}.groups .group_item .sub_group{cursor:pointer;font-size:14px;line-height:2.2;padding-left:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header_bottom.vue?vue&type=template&id=31a72b78&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "header_bottom"
  }, [_vm._ssrNode("<div class=\"mega_menu\"><div class=\"mega_menu_wrap container\"><div class=\"selector\"" + _vm._ssrStyle(null, null, {
    display: _vm.isOpenMenu ? '' : 'none'
  }) + "><div class=\"item_selector first_menu\">\n          Ноутбуки та комп’ютери\n        </div> <div class=\"item_selector\">\n          Інструменти\n        </div> <div class=\"item_selector\">\n          Будівельні матеріали\n        </div> <div class=\"item_selector\">\n          Оздоблювальний інструмент\n        </div> <div class=\"item_selector\">\n          Сантехніка\n        </div> <div class=\"item_selector\">\n          TV і відеотехніка\n        </div> <div class=\"item_selector\">\n          Комп'ютерна техніка та програмне забезпечення\n        </div> <div class=\"item_selector\">Меблі</div> <div class=\"item_selector\">\n          Спецодяг та взуття\n        </div> <div class=\"item_selector\">\n          Замовити послугу\n        </div> <div class=\"item_selector\">Взуття</div></div> " + (_vm.activeGroup ? "<div class=\"groups\"" + _vm._ssrStyle(null, null, {
    display: _vm.isOpenMenu ? '' : 'none'
  }) + ">" + _vm._ssrList(_vm.groups[_vm.activeGroup - 1], function (group, index) {
    return "<div class=\"group_item\"><div class=\"item_title\">" + _vm._ssrEscape(_vm._s(group.title)) + "</div> " + _vm._ssrList(group.subGroups, function (subGroup, subIndex) {
      return "<div class=\"sub_group\">" + _vm._ssrEscape("\n            " + _vm._s(subGroup) + "\n          ") + "</div>";
    }) + "</div>";
  }) + "</div>" : "<!---->") + "</div></div> <div class=\"header_bottom__wrapper container\"><div class=\"header_catalog\"><a href=\"/\" aria-current=\"page\" class=\"all nuxt-link-exact-active nuxt-link-active\"><div class=\"logo\"><img" + _vm._ssrAttr("src", __webpack_require__(23)) + " alt class=\"logo_icon\"> <img" + _vm._ssrAttr("src", __webpack_require__(24)) + " alt class=\"market_icon\"></div></a> <div class=\"catalog_btn\"><img src=\"data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+CiAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMTIsNDJINDhhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDE0LDYuMDAwMTQsMCwwLDAsNiw2aDY0YTYuMDAwMTQsNi4wMDAxNCwwLDAsMCw2LTZWNDhBNi4wMDAxNCw2LjAwMDE0LDAsMCwwLDExMiw0MlptLTYsNjRINTRWNTRoNTJaTTIwOCw0MkgxNDRhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDE0LDYuMDAwMTQsMCwwLDAsNiw2aDY0YTYuMDAwMTQsNi4wMDAxNCwwLDAsMCw2LTZWNDhBNi4wMDAxNCw2LjAwMDE0LDAsMCwwLDIwOCw0MlptLTYsNjRIMTUwVjU0aDUyWm0tOTAsMzJINDhhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDI5LDYuMDAwMjksMCwwLDAsNiw2aDY0YTYuMDAwMjksNi4wMDAyOSwwLDAsMCw2LTZWMTQ0QTYuMDAwMTQsNi4wMDAxNCwwLDAsMCwxMTIsMTM4Wm0tNiw2NEg1NFYxNTBoNTJabTEwMi02NEgxNDRhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDI5LDYuMDAwMjksMCwwLDAsNiw2aDY0YTYuMDAwMjksNi4wMDAyOSwwLDAsMCw2LTZWMTQ0QTYuMDAwMTQsNi4wMDAxNCwwLDAsMCwyMDgsMTM4Wm0tNiw2NEgxNTBWMTUwaDUyWiIvPgo8L3N2Zz4K\" alt class=\"open\"> <span class=\"catalog\">Каталог</span></div></div> <div class=\"search\"><div class=\"concave\"><a href=\"/search\" class=\"all\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjE2NjY3IDMuNUM2LjAzNzA1IDMuNSAzLjUgNi4wMzcwNSAzLjUgOS4xNjY2N0MzLjUgMTIuMjk2MyA2LjAzNzA1IDE0LjgzMzMgOS4xNjY2NyAxNC44MzMzQzEyLjI5NjMgMTQuODMzMyAxNC44MzMzIDEyLjI5NjMgMTQuODMzMyA5LjE2NjY3QzE0LjgzMzMgNi4wMzcwNSAxMi4yOTYzIDMuNSA5LjE2NjY3IDMuNVpNMS41IDkuMTY2NjdDMS41IDQuOTMyNDggNC45MzI0OCAxLjUgOS4xNjY2NyAxLjVDMTMuNDAwOCAxLjUgMTYuODMzMyA0LjkzMjQ4IDE2LjgzMzMgOS4xNjY2N0MxNi44MzMzIDEzLjQwMDggMTMuNDAwOCAxNi44MzMzIDkuMTY2NjcgMTYuODMzM0M0LjkzMjQ4IDE2LjgzMzMgMS41IDEzLjQwMDggMS41IDkuMTY2NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE2NzkgMTMuMTY3OUMxMy41NTg0IDEyLjc3NzQgMTQuMTkxNiAxMi43Nzc0IDE0LjU4MjEgMTMuMTY3OUwxOC4yMDcxIDE2Ljc5MjlDMTguNTk3NiAxNy4xODM0IDE4LjU5NzYgMTcuODE2NiAxOC4yMDcxIDE4LjIwNzFDMTcuODE2NiAxOC41OTc2IDE3LjE4MzQgMTguNTk3NiAxNi43OTI5IDE4LjIwNzFMMTMuMTY3OSAxNC41ODIxQzEyLjc3NzQgMTQuMTkxNiAxMi43Nzc0IDEzLjU1ODQgMTMuMTY3OSAxMy4xNjc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\" alt class=\"search_img\"></a> <div class=\"rightconcave\"></div></div> <input value class=\"header_search\"> <div class=\"search_list\" style=\"display: none\"><div class=\"list_item\" style=\"display: none\"><hr class=\"separate\"></div> <div class=\"list_item\" style=\"display: none\"><hr class=\"separate\"></div> <div class=\"list_item\" style=\"display: none\"><hr class=\"separate\"></div></div></div> <div class=\"header_controls\"><a href=\"/favorite\" class=\"all\"><div class=\"wrap_control\"><div class=\"control_icon favorite\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjg0IDMuNjA5OTlDMjAuMzI5MiAzLjA5OSAxOS43MjI4IDIuNjkzNjQgMTkuMDU1NCAyLjQxNzA4QzE4LjM4NzkgMi4xNDA1MiAxNy42NzI1IDEuOTk4MTcgMTYuOTUgMS45OTgxN0MxNi4yMjc1IDEuOTk4MTcgMTUuNTEyMSAyLjE0MDUyIDE0Ljg0NDYgMi40MTcwOEMxNC4xNzcyIDIuNjkzNjQgMTMuNTcwOCAzLjA5OSAxMy4wNiAzLjYwOTk5TDEyIDQuNjY5OTlMMTAuOTQgMy42MDk5OUM5LjkwODMgMi41NzgzIDguNTA5MDMgMS45OTg3IDcuMDUgMS45OTg3QzUuNTkwOTYgMS45OTg3IDQuMTkxNjkgMi41NzgzIDMuMTYgMy42MDk5OUMyLjEyODMgNC42NDE2OSAxLjU0ODcxIDYuMDQwOTYgMS41NDg3MSA3LjQ5OTk5QzEuNTQ4NzEgOC45NTkwMyAyLjEyODMgMTAuMzU4MyAzLjE2IDExLjM5TDQuMjIgMTIuNDVMMTIgMjAuMjNMMTkuNzggMTIuNDVMMjAuODQgMTEuMzlDMjEuMzUxIDEwLjg3OTIgMjEuNzU2MyAxMC4yNzI4IDIyLjAzMjkgOS42MDUzNUMyMi4zMDk1IDguOTM3ODkgMjIuNDUxOCA4LjIyMjQ4IDIyLjQ1MTggNy40OTk5OUMyMi40NTE4IDYuNzc3NTEgMjIuMzA5NSA2LjA2MjEgMjIuMDMyOSA1LjM5NDY0QzIxLjc1NjMgNC43MjcxOCAyMS4zNTEgNC4xMjA3NSAyMC44NCAzLjYwOTk5VjMuNjA5OTlaIiBzdHJva2U9IiMwRDBEMEQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt></div> <div class=\"count\">0</div></div></a> <a href=\"/cart\" class=\"all\"><div class=\"wrap_control\"><div class=\"control_icon\"><img" + _vm._ssrAttr("src", __webpack_require__(25)) + " alt></div> <div data-v-278ddcd1 class=\"count\">0</div></div></a> <div data-v-278ddcd1 class=\"auth\">Увійти</div></div></div> <hr class=\"line\">")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header_bottom.vue?vue&type=template&id=31a72b78&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header_bottom.vue?vue&type=script&lang=js&
/* harmony default export */ var header_bottomvue_type_script_lang_js_ = ({
  data() {
    return {
      isOpenMenu: false,
      activeGroup: 0,
      groups: [[{
        title: "Комп'ютери, неттопи, моноблоки",
        subGroups: ["Стационарные", "Неттопы"]
      }, {
        title: "Монітори",
        subGroups: []
      }, {
        title: "Планшети",
        subGroups: []
      }, {
        title: "Бренди",
        subGroups: ["<img src=''>"],
        allBrands: "Всі бренди"
      }], [{
        title: "Електроінструменти",
        subGroups: ["Шуруповерти", "Болгарки", "Напильники", "Перфоратори", "Дрилі", "Дискові пилки"]
      }, {
        title: "Енергозабезпечення",
        subGroups: ["Генератори", "Теплові пушки", "Сонячні панелі", "Компресори"]
      }, {
        title: "Інструменти",
        subGroups: ["Викрутки", "Монтажні пістолети", "Пили", "Мультитули", "Ломи та гвоздодери", "Молотки", "Тримачі інструментів"]
      }], [{
        title: "1Електроінструменти",
        subGroups: ["1Шуруповерти", "1Болгарки", "1Напильники", "1Перфоратори", "1Дрилі", "1Дискові пилки"]
      }, {
        title: "1Енергозабезпечення",
        subGroups: ["1Генератори", "1Теплові пушки", "1Сонячні панелі", "1Компресори"]
      }, {
        title: "1Інструменти",
        subGroups: ["1Викрутки", "1Монтажні пістолети", "1Пили", "1Мультитули", "1Ломи та гвоздодери", "1Молотки", "1Тримачі інструментів"]
      }], [{
        title: "2Електроінструменти",
        subGroups: ["2Шуруповерти", "2Болгарки", "2Напильники", "2Перфоратори", "2Дрилі", "2Дискові пилки"]
      }, {
        title: "2Енергозабезпечення",
        subGroups: ["2Генератори", "2Теплові пушки", "2Сонячні панелі", "2Компресори"]
      }, {
        title: "2Інструменти",
        subGroups: ["2Викрутки", "2Монтажні пістолети", "2Пили", "2Мультитули", "2Ломи та гвоздодери", "2Молотки", "2Тримачі інструментів"]
      }], [{
        title: "3Електроінструменти",
        subGroups: ["3Шуруповерти", "3Болгарки", "3Напильники", "3Перфоратори", "3Дрилі", "3Дискові пилки"]
      }, {
        title: "3Енергозабезпечення",
        subGroups: ["3Генератори", "3Теплові пушки", "3Сонячні панелі", "3Компресори"]
      }, {
        title: "3Інструменти",
        subGroups: ["3Викрутки", "3Монтажні пістолети", "3Пили", "3Мультитули", "3Ломи та гвоздодери", "3Молотки", "3Тримачі інструментів"]
      }], [{
        title: "4Електроінструменти",
        subGroups: ["4Шуруповерти", "4Болгарки", "4Напильники", "4Перфоратори", "4Дрилі", "4Дискові пилки"]
      }, {
        title: "4Енергозабезпечення",
        subGroups: ["4Генератори", "4Теплові пушки", "4Сонячні панелі", "4Компресори"]
      }, {
        title: "4Інструменти",
        subGroups: ["4Викрутки", "4Монтажні пістолети", "4Пили", "4Мультитули", "4Ломи та гвоздодери", "4Молотки", "4Тримачі інструментів"]
      }], [{
        title: "5Електроінструменти",
        subGroups: ["5Шуруповерти", "5Болгарки", "5Напильники", "5Перфоратори", "5Дрилі", "5Дискові пилки"]
      }, {
        title: "5Енергозабезпечення",
        subGroups: ["5Генератори", "5Теплові пушки", "5Сонячні панелі", "5Компресори"]
      }, {
        title: "5Інструменти",
        subGroups: ["5Викрутки", "5Монтажні пістолети", "5Пили", "5Мультитули", "5Ломи та гвоздодери", "5Молотки", "5Тримачі інструментів"]
      }], [{
        title: "6Електроінструменти",
        subGroups: ["6Шуруповерти", "6Болгарки", "6Напильники", "6Перфоратори", "6Дрилі", "6Дискові пилки"]
      }, {
        title: "6Енергозабезпечення",
        subGroups: ["6Генератори", "6Теплові пушки", "6Сонячні панелі", "6Компресори"]
      }, {
        title: "6Інструменти",
        subGroups: ["6Викрутки", "6Монтажні пістолети", "6Пили", "6Мультитули", "6Ломи та гвоздодери", "6Молотки", "6Тримачі інструментів"]
      }], [{
        title: "7Електроінструменти",
        subGroups: ["7Шуруповерти", "7Болгарки", "7Напильники", "7Перфоратори", "7Дрилі", "7Дискові пилки"]
      }, {
        title: "7Енергозабезпечення",
        subGroups: ["7Генератори", "7Теплові пушки", "7Сонячні панелі", "7Компресори"]
      }, {
        title: "7Інструменти",
        subGroups: ["7Викрутки", "7Монтажні пістолети", "7Пили", "7Мультитули", "7Ломи та гвоздодери", "7Молотки", "7Тримачі інструментів"]
      }], [{
        title: "8Електроінструменти",
        subGroups: ["8Шуруповерти", "8Болгарки", "8Напильники", "8Перфоратори", "8Дрилі", "8Дискові пилки"]
      }, {
        title: "8Енергозабезпечення",
        subGroups: ["8Генератори", "8Теплові пушки", "8Сонячні панелі", "8Компресори"]
      }, {
        title: "8Інструменти",
        subGroups: ["8Викрутки", "8Монтажні пістолети", "8Пили", "Мультитули", "8Ломи та гвоздодери", "8Молотки", "8Тримачі інструментів"]
      }], [{
        title: "9Електроінструменти",
        subGroups: ["9Шуруповерти", "9Болгарки", "9Напильники", "9Перфоратори", "Дрилі", "9Дискові пилки"]
      }, {
        title: "9Енергозабезпечення",
        subGroups: ["9Генератори", "9Теплові пушки", "9Сонячні панелі", "9Компресори"]
      }, {
        title: "9Інструменти",
        subGroups: ["9Викрутки", "9Монтажні пістолети", "9Пили", "Мультитули", "9Ломи та гвоздодери", "9Молотки", "9Тримачі інструментів"]
      }], [{
        title: "10Електроінструменти",
        subGroups: ["10Шуруповерти", "10Болгарки", "10Напильники", "10Перфоратори", "Дрилі", "10Дискові пилки"]
      }, {
        title: "10Енергозабезпечення",
        subGroups: ["10Генератори", "10Теплові пушки", "10Сонячні панелі", "10Компресори"]
      }, {
        title: "10Інструменти",
        subGroups: ["10Викрутки", "10Монтажні пістолети", "10Пили", "Мультитули", "10Ломи та гвоздодери", "10Молотки", "10Тримачі інструментів"]
      }]]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    }
  }
});
// CONCATENATED MODULE: ./components/header_bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_header_bottomvue_type_script_lang_js_ = (header_bottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/header_bottom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_header_bottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5bf785b0"
  
)

/* harmony default export */ var header_bottom = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("db9f5740", content, true, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5387b1a4", content, true, context)
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("a7924d34", content, true, context)
};

/***/ }),
/* 37 */
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
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footerr_vue_vue_type_template_id_4f9b830e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _footerr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footerr_vue_vue_type_template_id_4f9b830e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _footerr_vue_vue_type_template_id_4f9b830e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "a53e36fc"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title.02db07b.215b44a.png";

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_style_index_0_id_4f9b830e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_style_index_0_id_4f9b830e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_style_index_0_id_4f9b830e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_style_index_0_id_4f9b830e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerr_vue_vue_type_style_index_0_id_4f9b830e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{background-color:#f9fafb;display:flex}.section{font-size:14px;padding:25px;width:25%}.company_title{font-size:18px;font-weight:600}li{display:list-item;text-align:-webkit-match-parent}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/01.0df7fd5.660a999.jpeg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide2.08e6dd5.fc30937.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("5b86ea9e", content, true)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{display:block;left:0;position:relative;top:0;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{content:\"\";display:table}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{border:1px solid transparent;display:block;height:auto}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none;-khtml-user-select:none}.slick-list[data-v-3d1a4f76]{display:block;margin:0;overflow:hidden;padding:0;position:relative;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("fd5479ae", content, true)

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-family:\"slick\";font-size:20px;line-height:1;opacity:.75}.slick-prev{left:-25px}[dir=rtl] .slick-prev{left:auto;right:-25px}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{left:-25px;right:auto}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;display:block;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.slick-dots li{display:inline-block;margin:0 5px;padding:0;position:relative}.slick-dots li,.slick-dots li button{cursor:pointer;height:20px;width:20px}.slick-dots li button{background:transparent;border:0;color:transparent;display:block;font-size:0;line-height:0;outline:none;padding:5px}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000;content:\"•\";font-family:\"slick\";font-size:6px;height:20px;left:0;line-height:20px;opacity:.25;position:absolute;text-align:center;top:0;width:20px}.slick-dots li.slick-active button:before{color:#000;opacity:.75}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_47b765f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_47b765f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_47b765f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_47b765f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_47b765f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ban_slider{width:840px}.ban_slider,.slick-slide img{height:417px}.slick-slider[data-v-3d1a4f76]{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none;-khtml-user-select:none}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-prev{left:-25px}.custom-arrow_prev{background-color:#fff;border:1px solid #fff;border-radius:50%;box-shadow:-13px 20px 10px rgba(0,0,0,.01),-7px 11px 8px rgba(0,0,0,.05),-3px 5px 6px rgba(0,0,0,.09),-1px 1px 3px rgba(0,0,0,.1),0 0 0 rgba(0,0,0,.1);content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgBrZHLCQAhDESdBcGLYglpxcotRfsQzMabiyFediCQ8IaQD5yinDPNOSszu8eAtGoYsI8xygemlFqMkSVaCIF+gEsmFB1bHAZRAdAlJ+991brc57BM10NB67SboE2+P+sFFoZMIq8PPtIAAAAASUVORK5CYII=);font-size:30px;height:10px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;padding:13px;width:10px}.slick-prev{left:10px;z-index:1}.slick-slider{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none;-khtml-user-select:none}.slick-list{margin:0;overflow:hidden;padding:0}.slick-list,.slick-track{display:block;position:relative;transform:translateZ(0)}.slick-track{left:0;top:0}.slick-track:after,.slick-track:before{content:\"\";display:table}:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.slick-initialized .slick-slide{display:block}.ban{position:relative}.ban_title{font-size:35px;font-weight:600;line-height:1;margin-left:65px;max-width:282px;position:absolute;top:30%}.ban_descrip{left:65px;max-width:402px;position:absolute;top:220px}.slick-next{right:10px;z-index:1}.custom-arrow_next{background-color:#fff;border:1px solid #fff;border-radius:50%;box-shadow:-13px 20px 10px rgba(0,0,0,.01),-7px 11px 8px rgba(0,0,0,.05),-3px 5px 6px rgba(0,0,0,.09),-1px 1px 3px rgba(0,0,0,.1),0 0 0 rgba(0,0,0,.1);content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgBpZBBCsAgDAQTQfCi+AS/4st9ij5DEExrsVAkNgf3ksMO2U3AOZettdkYE4CRmjNorRMHqVsREcsfBN77MKNoG7eDcIV674mIhllaaxG5TV9IgSAxQix5aA5JD3qveArVWssKXL1kQje0Tk4mAAAAAElFTkSuQmCC);font-size:30px;height:10px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;padding:13px;width:10px}.slick-next:before{content:\"→\"}.slick-next:before,.slick-prev:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-family:\"slick\";font-size:20px;line-height:1;opacity:.75}.sec_banner{align-items:center;border:1px solid #dadae8;border-radius:4px;display:flex;flex-direction:column;justify-content:center;margin-left:20px;padding:10px}.sec_banner .sec_title{font-size:20px;font-weight:600;margin-bottom:25px;text-align:center}.sec_banner .sec_btn{background-color:#333;color:#fff;cursor:pointer;display:inline;display:initial;padding:5px 10px}.banner-wrap{display:flex;height:417px;justify-content:space-between;margin-top:20px;position:relative}.container{display:flex;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;width:100%}.apiimg{height:100%;max-width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_style_index_0_id_40e0a91c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_style_index_0_id_40e0a91c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_style_index_0_id_40e0a91c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_style_index_0_id_40e0a91c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_incom_vue_vue_type_style_index_0_id_40e0a91c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".new_incom{display:flex;flex-direction:column;padding-top:20px}a{color:#3e77aa;text-decoration:inherit}.title .text{display:block;font-size:28px;font-weight:400;margin-right:10px;white-space:nowrap}.list{display:flex;flex-wrap:wrap;justify-content:space-around}.title{justify-content:space-between;margin-bottom:15px}.title,.title .all{align-items:center;display:flex}.title .all{color:#f38f00;cursor:pointer}.title .all .all_title{font-size:14px;margin-right:5px}.card_img{position:relative}.product_card .labels{min-height:20px}.label{color:#fff;font-weight:600;margin-right:8px;padding:0 5px}.product_card .labels .label{font-size:13px}.product_card .labels,.product_card:hover>.control{display:flex;justify-content:space-between}.favor{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuOTk3IDMuMjljLjE4OC0uMjE1LjM1Mi0uNDE0LjUyNy0uNjAzLjk0OC0xLjAyIDIuMDkyLTEuNjk4IDMuNDg0LTEuODY4IDIuMzkzLS4yOSA0LjY2MyAxLjAxOSA1LjU2OCAzLjMzNy42NjkgMS43MDguNTMyIDMuMzgxLS4yOSA1LjAxLS42OTkgMS4zODMtMS42ODIgMi41NS0yLjc3OCAzLjYyOC0xLjU4NCAxLjU1OC0zLjM0NCAyLjg5NS01LjIxOSA0LjA3Ni0uODMxLjUyMy0xLjczNi41MzUtMi41NjUuMDA5LTIuMjk0LTEuNDU4LTQuNDQtMy4xMDUtNi4yNDYtNS4xNTRDMS41MiAxMC42NC43MDUgOS40Ni4yNjMgOC4wNmMtLjc3MS0yLjQ0Mi4xODQtNS4yOTMgMi40NzktNi42QzQuNTc4LjQxNyA2Ljg5Ny41OCA4LjY0IDEuOTRjLjQzLjMzNi43ODguNzY1IDEuMTc4IDEuMTUyLjA1OC4wNTQuMTA5LjExOC4xOC4xOThaIiBmaWxsPSIjQThBREIxIi8+PC9zdmc+)}.favor,.favor_active{background-size:cover;height:18px;position:absolute;right:2px;top:5px;width:20px;z-index:1}.opacity{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0;z-index:2}.product_card{border:1px solid #ededed;cursor:pointer;flex-direction:column;justify-content:space-between;margin-bottom:20px;padding:10px;position:relative;width:185px}.price[data-v-4dbc45fc],.pricevalues[data-v-4dbc45fc],.product_card{align-items:center;display:flex}.price[data-v-4dbc45fc]{justify-content:space-between;width:100%}.rating_num{margin-left:10px}.full-stars:before{-webkit-text-stroke:1px #f05252}.full-stars{color:#f05252;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap}.empty-stars:before,.full-stars:before{content:\"★★★★★\";font-size:11pt}.empty-stars:before{-webkit-text-stroke:1px gray}.ratings{color:#b1b1b1;overflow:hidden;position:relative;vertical-align:middle;width:62px}.rate,.ratings{display:flex}.sale{background-color:#f05252;border-radius:6px;color:#fff;padding:0 5px;position:absolute;top:-30px}.product_card .product_title{font-size:15px;position:relative}.added{background:#20c997;height:40px;width:40px}.added,.cart{align-items:center;border-radius:50%;display:flex;justify-content:center}.cart{background-color:#f38f00;padding:7px;width:26px}.oldprice{color:#9ca3af;font-size:15px;text-decoration-color:#f05252}.currprice{color:#f38f00;font-size:22px;font-weight:600}.pricevalues{flex-direction:column}.price{justify-content:space-between;width:100%}.price,.pricevalues{align-items:center;display:flex}.el-pagination__total{color:#606266;font-weight:400;margin-right:10px}.pagination-container{background:#fff;padding:32px 16px}.show_more{background-color:#f3f3f3;border-radius:5px;color:#f38f00;cursor:pointer;font-size:14px;font-weight:700;padding:8px;text-align:center;width:100%}.none{font-size:18px;height:55px}.el-select .el-input__inner{cursor:pointer;padding-right:35px}.el-input--suffix .el-input__inner{padding-right:30px}.el-input--mini .el-input__inner{height:28px;line-height:28px}.el-pagination__sizes .el-input .el-input__inner{font-size:13px;padding-left:8px}.el-pagination .el-select .el-input .el-input__inner{border-radius:3px;padding-right:25px}.el-input--mini{font-size:12px}.el-select>.el-input{display:block}.el-pagination .el-select .el-input{margin:0 5px;width:100px;width:130px!important}.el-select{display:inline-block;position:relative}.el-pagination__sizes{color:#606266;font-weight:400;margin:0 10px 0 0}.el-pager li,.el-pager li.btn-quicknext:hover,.el-pager li.btn-quickprev:hover{cursor:pointer}.el-pager li{background:#fff;box-sizing:border-box;font-size:13px;height:28px;line-height:28px;min-width:35.5px;padding:0 4px;text-align:center}.el-pager li.active{color:#409eff;cursor:default}.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev,.el-pagination.is-background .el-pager li{background-color:#f4f4f5;border-radius:2px;color:#606266;margin:0 5px;min-width:30px}.el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#409eff;background-color:#f38f00!important;color:#fff}.el-pager,.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev{padding:0}.el-pager,.el-pager li{display:inline-block;margin:0;vertical-align:top}.el-pager{font-size:0;list-style:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-icon-arrow-left:before{content:\"\\e6de\"}[class*=\" el-icon-\"],[class^=el-icon-]{font-feature-settings:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:element-icons!important;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none;vertical-align:baseline}.el-pagination .btn-next .el-icon,.el-pagination .btn-prev .el-icon{display:block;font-size:12px;font-weight:700}[role=button],button{border:none;cursor:pointer}button{background-color:transparent;background-image:none}button,select{text-transform:none}.el-pagination button{background:0 0;border:none;padding:0 6px}.el-pagination .btn-next,.el-pagination .btn-prev{background:50% no-repeat #fff;background-size:16px;color:#303133;cursor:pointer;margin:0}.el-pagination{color:#303133;font-weight:700;padding:2px 5px;white-space:nowrap}:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.el-pagination:after,.el-pagination:before{content:\"\";display:table}.el-pagination:after{clear:both}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input,.el-input__inner{font-size:inherit}.el-input__inner{background-color:#fff;background-image:none;border:1px solid #dcdfe6;border-radius:4px;box-sizing:border-box;color:#606266;display:inline-block;height:40px;line-height:40px;outline:0;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.el-pagination .el-input__inner{line-height:normal;text-align:center}.el-pagination__jump .el-input__inner{padding:0 3px}.el-pagination__editor.el-input .el-input__inner{height:28px}.el-pagination__editor{border-radius:3px;box-sizing:border-box;height:28px;line-height:18px;margin:0 2px;padding:0 2px;text-align:center}.el-color-picker__icon,.el-input,.el-textarea{display:inline-block;width:100%}.el-input{font-size:14px;position:relative}.el-pagination__editor.el-input{width:50px}.el-pagination__jump{color:#606266;font-weight:400;margin-left:24px}.el-pagination button,.el-pagination span:not([class*=suffix]){box-sizing:border-box;display:inline-block;font-size:13px;height:28px;line-height:28px;min-width:35.5px;vertical-align:top}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_cont_vue_vue_type_style_index_0_id_b6b7c5e4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slider.vue?vue&type=template&id=47b765f8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "banner container"
  }, [_vm._ssrNode("<div class=\"banner-wrap\">", "</div>", [_vm._ssrNode("<div class=\"ban_slider\">", "</div>", [_c('VueSlickCarousel', {
    attrs: {
      "arrows": true,
      "dots": true
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function (arrowOption) {
        return [_c('div', {
          staticClass: "custom-arrow_prev"
        }, [_vm._v("\n            " + _vm._s(arrowOption.currentSlide) + "/" + _vm._s(arrowOption.slideCount) + "\n          ")])];
      }
    }, {
      key: "nextArrow",
      fn: function (arrowOption) {
        return [_c('div', {
          staticClass: "custom-arrow_next"
        }, [_vm._v("\n            " + _vm._s(arrowOption.currentSlide) + "/" + _vm._s(arrowOption.slideCount) + "\n          ")])];
      }
    }])
  }, [_c('div', {
    staticClass: "slick-slide",
    staticStyle: {
      "outline": "none",
      "width": "840px",
      "position": "relative",
      "left": "0px",
      "opacity": "0",
      "transition": "opacity 500ms ease 0s, visibility 500ms ease 0s"
    },
    attrs: {
      "tabindex": "-1",
      "data-index": "0",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "ban",
    staticStyle: {
      "width": "100%",
      "display": "inline-block"
    },
    attrs: {
      "tabindex": "-1"
    }
  }, [_c('h4', {
    staticClass: "ban_title"
  }, [_vm._v("Новорічні знижки")]), _vm._v(" "), _c('h6', {
    staticClass: "ban_descrip"
  }, [_vm._v("\n              Sed ut sit voluptque laudantium, eaque ipsa quae ab et quasi\n              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam\n              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed\n              quia\n            ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(44),
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ban",
    staticStyle: {
      "width": "100%",
      "display": "inline-block"
    },
    attrs: {
      "tabindex": "-1"
    }
  }, [_c('h4', {
    staticClass: "ban_title"
  }, [_vm._v("Великий вибір продуктів")]), _vm._v(" "), _c('h6', {
    staticClass: "ban_descrip"
  }, [_vm._v("\n            On the other hand, we denounce with righteous indignation and\n            dislike men who are so beguiled and demoralized by the charms of\n            pleasure of the moment, so blinded by desire, that they cannot\n            foresee the pain and trouble that are bound to ensue; and equal\n            blame belongs to those who fail in their duty\n          ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" <div class=\"sec_banner\"><img" + _vm._ssrAttr("src", _vm.images) + " class=\"apiimg\"></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/slider.vue?vue&type=template&id=47b765f8&

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(21);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slider.vue?vue&type=script&lang=js&


// optional style for arrows & dots

/* harmony default export */ var slidervue_type_script_lang_js_ = ({
  name: "MyComponent",
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  name: "App",
  methods: {
    fetchRandomPhoto() {
      fetch(this.url + `?client_id=${this.accessKey}`).then(response => response.json()).then(json => this.images = json.urls.small);
    }
  },
  created() {
    this.fetchRandomPhoto();
  },
  data() {
    return {
      images: "",
      accessKey: "bgeJ1WoevDL7LCXHcNW4DV8ljoctsc2Tr3ImfE55eoM",
      url: "https://api.unsplash.com/photos/random"
    };
  }
});
// CONCATENATED MODULE: ./components/slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_slidervue_type_script_lang_js_ = (slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b8f0d34"
  
)

/* harmony default export */ var slider = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footerr.vue?vue&type=template&id=4f9b830e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('footer', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"section title\"><img" + _vm._ssrAttr("src", __webpack_require__(41)) + "></div> <div class=\"section company\"><div class=\"company_title\">Компанія</div> <ul><li>Про компанію</li> <li>Інформація про продавця</li> <li>Група компаній 104</li> <li>Відділ корпоративного продажу</li> <li>Вакансії</li> <li>Тендери</li> <li>Новини маркету</li> <li>Торгівельна нерухомість</li> <li>Соціальні проекти</li> <li>Контакти прес-служби</li> <li>Умови використання сайту</li> <li>Політика конфіденційності</li> <li>Стати партнером</li></ul></div> <div class=\"section company\"><div class=\"company_title\">Покупцям</div> <ul><li>Адреси магазинів “104.юа”</li> <li>Партнери</li> <li>Оплата</li> <li>Повернення товару</li> <li>Доставка</li> <li>Блог</li> <li>Акції</li> <li>Послуги</li> <li>Бренди</li> <li>Подарункові карти</li> <li>Розпродаж</li> <li>Політика конфіденційності</li> <li>Найс Прайс</li></ul></div> <div class=\"section company\"><div class=\"company_title\">Контакти</div> <ul><li>Режим роботи</li> <li>Магазини по всій Україні</li> <li>Інформаційна служба</li> <li>Графік роботи Call-Центру</li> <li class=\"phone\">0 800 104 104</li> <li>Пт-Пн  8:30 - 21:00</li> <li>Сб-Нд  8:30 - 22:00</li></ul></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footerr.vue?vue&type=template&id=4f9b830e&


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new_incom.vue?vue&type=template&id=40e0a91c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "new_incom container"
  }, [_vm._ssrNode("<h3 class=\"title\"><a href=\"/arrived\" class=\"text\">Нові надходження</a> <div class=\"all\"><a href=\"/arrived\"><div class=\"all_title\">Дивитись всі</div></a> <img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUzMzMzIDguNDk5OTVDMi41MzMzMyA4LjA1ODEyIDIuODkxNSA3LjY5OTk1IDMuMzMzMzMgNy42OTk5NUgxMi42NjY3QzEzLjEwODUgNy42OTk5NSAxMy40NjY3IDguMDU4MTIgMTMuNDY2NyA4LjQ5OTk1QzEzLjQ2NjcgOC45NDE3OCAxMy4xMDg1IDkuMjk5OTUgMTIuNjY2NyA5LjI5OTk1SDMuMzMzMzNDMi44OTE1IDkuMjk5OTUgMi41MzMzMyA4Ljk0MTc4IDIuNTMzMzMgOC40OTk5NVoiIGZpbGw9IiNGMzhGMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQzNDI3IDMuMjY3NjRDNy43NDY2OSAyLjk1NTIyIDguMjUzMjIgMi45NTUyMiA4LjU2NTY0IDMuMjY3NjRMMTMuMjMyMyA3LjkzNDMxQzEzLjU0NDcgOC4yNDY3MyAxMy41NDQ3IDguNzUzMjYgMTMuMjMyMyA5LjA2NTY4TDguNTY1NjQgMTMuNzMyM0M4LjI1MzIyIDE0LjA0NDggNy43NDY2OSAxNC4wNDQ4IDcuNDM0MjcgMTMuNzMyM0M3LjEyMTg1IDEzLjQxOTkgNy4xMjE4NSAxMi45MTM0IDcuNDM0MjcgMTIuNjAxTDExLjUzNTIgOC40OTk5OUw3LjQzNDI3IDQuMzk5MDFDNy4xMjE4NSA0LjA4NjU5IDcuMTIxODUgMy41ODAwNiA3LjQzNDI3IDMuMjY3NjRaIiBmaWxsPSIjRjM4RjAwIi8+Cjwvc3ZnPgo=\" alt class=\"all_img\"></div></h3> <div class=\"list\"><div img=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54444/%D1%811.jpg\" rate=\"1.3\" labels=\"[object Object]\" price=\"502.77\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">New!</div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54444/%D1%811.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n        Murcia Women Hahk Black Handbags\n        <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 26%\"></div></div> <div class=\"rating_num\">1.3</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">503 ₴</div> <del class=\"oldprice\"> 604 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div data-v-0109d49e img=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54445/%D1%816.jpg\" rate=\"2.4\" labels=\"[object Object]\" price=\"400.43\" class=\"product_card\"><div class=\"opacity\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">New!</div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54445/%D1%816.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n        Gini and Jony Boys Core Green T-shirt\n        <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 48%\"></div></div> <div class=\"rating_num\">2.4</div></div> <div class=\"price\" style=\"display: none\"><div class=\"pricevalues\"><div class=\"currprice\">401 ₴</div> <del class=\"oldprice\"> 481 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div data-v-0109d49e img=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54447/f7.jpg\" rate=\"3.4\" labels=\"[object Object]\" price=\"634.76\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">New!</div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54447/f7.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n        Kipsta Men Loose Fit Round Neck Jersey Red\n        <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 68%\"></div></div> <div class=\"rating_num\">3.4</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">635 ₴</div> <del class=\"oldprice\"> 762 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div img=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54448/f2.jpg\" rate=\"1.6\" labels=\"[object Object]\" price=\"403.1\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">New!</div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54448/f2.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n        Titan Women White Dial Watch NB9701WM01\n        <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 32%\"></div></div> <div class=\"rating_num\">1.6</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">404 ₴</div> <del class=\"oldprice\"> 484 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div data-v-0109d49e img=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54455/f1.jpg\" rate=\"3.7\" labels=\"[object Object]\" price=\"276.8\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">New!</div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54455/f1.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n        Lotto Men's Soccer Track Flip Flop\n        <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 74%\"></div></div> <div class=\"rating_num\">3.7</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">277 ₴</div> <del class=\"oldprice\"> 333 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/new_incom.vue?vue&type=template&id=40e0a91c&


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_incom_vue_vue_type_template_id_40e0a91c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _new_incom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_incom_vue_vue_type_template_id_40e0a91c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _new_incom_vue_vue_type_template_id_40e0a91c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "b946c530"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3cd569c7", content, true, context)
};

/***/ }),
/* 61 */,
/* 62 */
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

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ae2c35fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ae2c35fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ae2c35fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ae2c35fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ae2c35fc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-size:16px;font-weight:400}body{display:block;margin:8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=ae2c35fc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('header_bottom'), _vm._ssrNode(" "), _vm._ssrNode("<main>", "</main>", [_c('slider'), _vm._ssrNode(" "), _c('new_incom'), _vm._ssrNode(" "), _c('tabs_cont')], 2), _vm._ssrNode(" "), _c('footerr')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=ae2c35fc&

// EXTERNAL MODULE: ./components/header_bottom.vue + 4 modules
var header_bottom = __webpack_require__(32);

// EXTERNAL MODULE: ./components/footerr.vue
var footerr = __webpack_require__(40);

// EXTERNAL MODULE: ./components/slider.vue + 4 modules
var slider = __webpack_require__(56);

// EXTERNAL MODULE: ./components/new_incom.vue
var new_incom = __webpack_require__(59);

// EXTERNAL MODULE: ./components/tabs_cont.vue + 4 modules
var tabs_cont = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    header_bottom: header_bottom["default"],
    footerr: footerr["default"],
    slider: slider["default"],
    new_incom: new_incom["default"],
    tabs_cont: tabs_cont["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "333ab90e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slider: __webpack_require__(56).default,Footerr: __webpack_require__(40).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map