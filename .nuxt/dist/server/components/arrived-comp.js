exports.ids = [1,3];
exports.modules = {

/***/ 22:
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.bc783f5.01d6115.svg";

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/market.545b9d8.97fa755.svg";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart2.3ba4f67.9db98ae.svg";

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_bottom_vue_vue_type_style_index_0_id_31a72b78_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
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

/***/ 32:
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("4ce336aa", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrived_comp_vue_vue_type_style_index_0_id_d0b570a6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrived_comp_vue_vue_type_style_index_0_id_d0b570a6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrived_comp_vue_vue_type_style_index_0_id_d0b570a6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrived_comp_vue_vue_type_style_index_0_id_d0b570a6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_arrived_comp_vue_vue_type_style_index_0_id_d0b570a6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-size:16px;font-weight:400}body{display:block;margin:8px}.accordion{border-bottom:1px solid #e9e9e9;border-right:1px solid #e9e9e9;padding:8px}.filters{height:100%;margin-right:20px;width:250px;width:325px!important}.catalog_wrapper{display:flex;padding:20px 0}.container{display:flex;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;width:100%}.list_wrap[data-v-268ce69c]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:-moz-fit-content;width:fit-content}.content{font-size:13px}.duration-100{transition-duration:.1s}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.rotate-180{--tw-rotate:180deg}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.w-3{width:.75rem}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}[role=button],button{border:none;cursor:pointer}button{background-color:transparent;background-image:none}button,select{text-transform:none}.flex{align-items:center;color:#3e77aa;display:flex;font-size:14px;justify-content:space-between;width:100%}.none{font-size:18px;height:55px}.price,.pricevalues{align-items:center;display:flex}.price{justify-content:space-between;width:100%}.rating_num{margin-left:10px}:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.empty-stars:before,.full-stars:before{content:\"★★★★★\";font-size:11pt}.full-stars:before{-webkit-text-stroke:1px #f05252}.full-stars{color:#f05252;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap}.empty-stars:before{-webkit-text-stroke:1px gray}.ratings{color:#b1b1b1;overflow:hidden;position:relative;vertical-align:middle;width:62px}.rate,.ratings{display:flex}.sale{background-color:#f05252;border-radius:6px;color:#fff;padding:0 5px;position:absolute;top:-30px}.product_card .product_title{font-size:15px;position:relative}img,video{height:auto;max-width:100%}.card_img{position:relative}.label{color:#fff;font-weight:600;margin-right:8px;padding:0 5px}.product_card .labels .label{font-size:13px}element.style{background-color:#000}.product_card .labels,.product_card:hover>.control{display:flex;justify-content:space-between}.product_card .labels{min-height:20px}.favor{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuOTk3IDMuMjljLjE4OC0uMjE1LjM1Mi0uNDE0LjUyNy0uNjAzLjk0OC0xLjAyIDIuMDkyLTEuNjk4IDMuNDg0LTEuODY4IDIuMzkzLS4yOSA0LjY2MyAxLjAxOSA1LjU2OCAzLjMzNy42NjkgMS43MDguNTMyIDMuMzgxLS4yOSA1LjAxLS42OTkgMS4zODMtMS42ODIgMi41NS0yLjc3OCAzLjYyOC0xLjU4NCAxLjU1OC0zLjM0NCAyLjg5NS01LjIxOSA0LjA3Ni0uODMxLjUyMy0xLjczNi41MzUtMi41NjUuMDA5LTIuMjk0LTEuNDU4LTQuNDQtMy4xMDUtNi4yNDYtNS4xNTRDMS41MiAxMC42NC43MDUgOS40Ni4yNjMgOC4wNmMtLjc3MS0yLjQ0Mi4xODQtNS4yOTMgMi40NzktNi42QzQuNTc4LjQxNyA2Ljg5Ny41OCA4LjY0IDEuOTRjLjQzLjMzNi43ODguNzY1IDEuMTc4IDEuMTUyLjA1OC4wNTQuMTA5LjExOC4xOC4xOThaIiBmaWxsPSIjQThBREIxIi8+PC9zdmc+)}.favor,.favor_active{background-size:cover;height:18px;position:absolute;right:2px;top:5px;width:20px;z-index:1}.currprice[data-v-4dbc45fc]{color:#f38f00;font-size:22px;font-weight:600}.el-pager li{background:#fff;box-sizing:border-box;font-size:13px;height:28px;line-height:28px;min-width:35.5px;padding:0 4px;text-align:center}.el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#409eff}.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev,.el-pagination.is-background .el-pager li{background-color:#f4f4f5;border-radius:2px;color:#606266;margin:0 5px;min-width:30px}.el-pager li.active{color:#409eff;cursor:default}.el-pager li,.el-pager li.btn-quicknext:hover,.el-pager li.btn-quickprev:hover{cursor:pointer}.el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#f38f00;color:#fff}.el-pager,.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev{padding:0}.el-pager,.el-pager li{display:inline-block;margin:0;vertical-align:top}.el-pager{font-size:0;list-style:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.slick-prev{left:10px;z-index:1}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/arrived_comp.vue?vue&type=template&id=d0b570a6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"catalog container\"><div class=\"catalog_wrapper\"><aside class=\"filters\"><div class=\"accordion\"><button aria-controls=\"collapse92\" isopen=\"true\" class=\"flex\">\n            Ціна\n            <svg color=\"#111827\" fill=\"none\" stroke=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"2 0 12 10\" aria-hidden=\"true\" class=\"w-3 transition-all duration-100 transform rotate-180\"><path d=\"M15 1.2l-7 7-7-7\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></button> <div id=\"collapse92\" class=\"content\"></div></div></aside> <div class=\"list_wrap\"><div class=\"list\"><div rate=\"2.7\" labels=\"[object Object]\" price=\"1005\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Кроссовки інші\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 54%\"></div></div> <div class=\"rating_num\">2.7</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">1 005 ₴</div> <del class=\"oldprice\"> 1 206 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"4.7\" labels=\"[object Object]\" price=\"994\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Кроссовки Energetics Amsterdam VI M 416940-900046 р.42 EUR 42 27\n              см черно-серый\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 94%\"></div></div> <div class=\"rating_num\">4.7</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">994 ₴</div> <del class=\"oldprice\"> 1 193 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"1.8\" labels=\"[object Object]\" price=\"457.48\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Chimp Men Teja Main Hoon Blue Tshirts\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 36%\"></div></div> <div class=\"rating_num\">1.8</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">458 ₴</div> <del class=\"oldprice\"> 549 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"1.5\" labels=\"[object Object]\" price=\"450.72\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Lakme Absolute Cheek Chromatic Day Blushes Blusher\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 30%\"></div></div> <div class=\"rating_num\">1.5</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">451 ₴</div> <del class=\"oldprice\"> 541 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"1.8\" labels=\"[object Object]\" price=\"650.06\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Tantra Women Printed Peach T-shirt\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 36%\"></div></div> <div class=\"rating_num\">1.8</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">651 ₴</div> <del class=\"oldprice\"> 781 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"1.6\" labels=\"[object Object]\" price=\"470.89\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Sepia Women Blue Printed Top\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 32%\"></div></div> <div class=\"rating_num\">1.6</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">471 ₴</div> <del class=\"oldprice\"> 566 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"2.9\" labels=\"[object Object]\" price=\"424.37\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Gas Men Caddy Casual Shoe\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 58%\"></div></div> <div class=\"rating_num\">2.9</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">425 ₴</div> <del class=\"oldprice\"> 510 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"4.1\" labels=\"[object Object]\" price=\"584.83\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkif5HPPhPsAVNICZaHj5flvGpV3hjjaTtM8dj-zGSXzllfKJnQVSg29zlcgZT1ALyL4&usqp=CAU\" alt class=\"card_img\"> <div class=\"product_title\">\n              Puma Men Graphic Stellar Blue Tshirt\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 82%\"></div></div> <div class=\"rating_num\">4.1</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">585 ₴</div> <del class=\"oldprice\"> 702 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"3.5\" labels=\"[object Object]\" price=\"502.77\" class=\"product_card\"><div class=\"opacity\" style=\"display: none\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54444/%D1%811.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n              Murcia Women Hahk Black Handbags\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 70%\"></div></div> <div class=\"rating_num\">3.5</div></div> <div class=\"price\"><div class=\"pricevalues\"><div class=\"currprice\">503 ₴</div> <del class=\"oldprice\"> 604 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\" style=\"display: none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div> <div rate=\"2.1\" labels=\"[object Object]\" price=\"400.43\" class=\"product_card\"><div class=\"opacity\"></div> <span class=\"favor\"></span> <div class=\"labels\"><div class=\"label\" style=\"background-color: rgb(0, 0, 0)\">\n                New!\n              </div></div> <img src=\"http://api.marketplace.ent.ukrgas.com.ua/media/products/54445/%D1%816.jpg\" alt class=\"card_img\"> <div class=\"product_title\">\n              Gini and Jony Boys Core Green T-shirt\n              <div class=\"sale\">-20%</div></div> <div class=\"rate\"><div class=\"ratings\"><div class=\"empty-stars\"></div> <div class=\"full-stars\" style=\"width: 42%\"></div></div> <div class=\"rating_num\">2.1</div></div> <div class=\"price\" style=\"display: none\"><div class=\"pricevalues\"><div class=\"currprice\">401 ₴</div> <del class=\"oldprice\"> 481 ₴</del></div> <div class=\"cart\"><img src=\"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K\" alt class=\"cart_icon\"></div> <div class=\"added\" style=\"display: none\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=\" alt class=\"cart_icon\"></div></div> <div class=\"none\">Немає в наявності</div> <div class=\"qty\" style=\"display: none\">1</div></div></div> <div class=\"show_more\">Показати ще</div> <div class=\"pagination-container pag\"><div class=\"el-pagination is-background\"><span class=\"el-pagination__total\">Total 10</span><span class=\"el-pagination__sizes\"><div class=\"el-select el-select--mini\"><div class=\"el-input el-input--mini el-input--suffix\"><input type=\"text\" readonly=\"readonly\" autocomplete=\"off\" placeholder=\"Select\" class=\"el-input__inner\"><span class=\"el-input__suffix\"><span class=\"el-input__suffix-inner\"><i class=\"el-select__caret el-input__icon el-icon-arrow-up\"></i></span></span></div> <div class=\"el-select-dropdown el-popper\" style=\"display: none; min-width: 139.969px\"><div class=\"el-scrollbar\"><div class=\"el-select-dropdown__wrap el-scrollbar__wrap\" style=\"margin-bottom: -26px; margin-right: -26px\"><ul class=\"el-scrollbar__view el-select-dropdown__list\"><li class=\"el-select-dropdown__item selected\"><span>10/page</span></li> <li class=\"el-select-dropdown__item\"><span>20/page</span></li> <li class=\"el-select-dropdown__item\"><span>30/page</span></li> <li class=\"el-select-dropdown__item\"><span>50/page</span></li></ul></div> <div class=\"el-scrollbar__bar is-horizontal\"><div class=\"el-scrollbar__thumb\" style=\"transform: translateX(0%)\"></div></div> <div class=\"el-scrollbar__bar is-vertical\"><div class=\"el-scrollbar__thumb\" style=\"transform: translateY(0%)\"></div></div></div></div></div></span><button type=\"button\" disabled=\"disabled\" class=\"btn-prev\"><i class=\"custom-arrow_prev\"></i></button> <ul class=\"el-pager\"><li class=\"number active\">1</li></ul> <button type=\"button\" disabled=\"disabled\" class=\"btn-next\"><i class=\"custom-arrow_next\"></i></button><span class=\"el-pagination__jump\">Go to\n              <div class=\"el-input el-pagination__editor is-in-pagination\"><input type=\"number\" autocomplete=\"off\" min=\"1\" max=\"1\" class=\"el-input__inner\"></div></span></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/arrived_comp.vue?vue&type=template&id=d0b570a6&

// EXTERNAL MODULE: ./components/header_bottom.vue + 4 modules
var header_bottom = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/arrived_comp.vue?vue&type=script&lang=js&

/* harmony default export */ var arrived_compvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    header_bottom: header_bottom["default"]
  }
});
// CONCATENATED MODULE: ./components/arrived_comp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_arrived_compvue_type_script_lang_js_ = (arrived_compvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/arrived_comp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_arrived_compvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7bb6cb34"
  
)

/* harmony default export */ var arrived_comp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=arrived-comp.js.map