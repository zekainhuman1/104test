<template>
  <div>
    <header_bottom />
    <main>
      <div>
        <div class="catalog container">
          <div class="catalog_wrapper">
            <aside class="filters">
              <div class="accordion">
                <button aria-controls="collapse92" class="flex" isopen="true" @click="toggleFilter">
                  Ціна
                  <svg
                    color="#111827"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 0 12 10"
                    aria-hidden="true"
                    class="w-3 transition-all duration-100 transform rotate-180"
                  >
                    <path
                      d="M15 1.2l-7 7-7-7"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div class="filter_selector">
              <div class="selector" v-show="isOpenFilter">
          <div class="filter_selector_item" @click="sortFilter('added')">
            Ноутбуки та комп’ютери
          </div>
          <div class="filter_selector_item" @click="sortFilter('name')">
            Інструменти
          </div>
        </div>
        </div>
                <div id="collapse92" class="content" style=""></div>
              </div>
            </aside>
            <div class="list_wrap">
              <div class="list">
                <productcard v-for="item in shows" :key="item.id" :item="item" />

              </div>
              <div class="show_more">Показати ще</div>
              <div class="pagination-container pag">
                <div class="el-pagination is-background">
                  <span class="el-pagination__total">Total 10</span
                  ><span class="el-pagination__sizes"
                    ><div class="el-select el-select--mini">
                      <!---->
                      <div class="el-input el-input--mini el-input--suffix">
                        <!----><input
                          type="text"
                          readonly="readonly"
                          autocomplete="off"
                          placeholder="Select"
                          class="el-input__inner"
                        /><!----><span class="el-input__suffix"
                          ><span class="el-input__suffix-inner"
                            ><i
                              class="el-select__caret el-input__icon el-icon-arrow-up"
                            ></i
                            ><!----><!----><!----><!----><!----></span
                          ><!----></span
                        ><!----><!---->
                      </div>
                      <div
                        class="el-select-dropdown el-popper"
                        style="display: none; min-width: 139.969px"
                      >
                        <div class="el-scrollbar" style="">
                          <div
                            class="el-select-dropdown__wrap el-scrollbar__wrap"
                            style="margin-bottom: -26px; margin-right: -26px"
                          >
                            <ul
                              class="el-scrollbar__view el-select-dropdown__list"
                            >
                              <!---->
                              <li class="el-select-dropdown__item selected">
                                <span>10/page</span>
                              </li>
                              <li class="el-select-dropdown__item">
                                <span>20/page</span>
                              </li>
                              <li class="el-select-dropdown__item">
                                <span>30/page</span>
                              </li>
                              <li class="el-select-dropdown__item">
                                <span>50/page</span>
                              </li>
                            </ul>
                          </div>
                          <div class="el-scrollbar__bar is-horizontal">
                            <div
                              class="el-scrollbar__thumb"
                              style="transform: translateX(0%)"
                            ></div>
                          </div>
                          <div class="el-scrollbar__bar is-vertical">
                            <div
                              class="el-scrollbar__thumb"
                              style="transform: translateY(0%)"
                            ></div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div></span
                  ><button type="button" disabled="disabled" class="btn-prev">
                    <i class="custom-arrow_prev"></i>
                  </button>
                  <ul class="el-pager">
                    <li class="number active">1</li>
                    <!----><!----><!---->
                  </ul>
                  <button type="button" disabled="disabled" class="btn-next">
                    <i class="custom-arrow_next"></i></button
                  ><span class="el-pagination__jump"
                    >Go to
                    <div
                      class="el-input el-pagination__editor is-in-pagination"
                    >
                      <!----><input
                        type="number"
                        autocomplete="off"
                        min="1"
                        max="1"
                        class="el-input__inner"
                      /></div
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
    
<script lang="js">
import header_bottom from "~/components/header_bottom.vue";
import productcard from "@/components/productcard.vue"

export default {
  name: "IndexPage",
  components: {
    header_bottom,
    productcard,
  },

  data: function() {
    return {
      isOpenFilter: false,
      shows: []
    }
  },
  
  methods: {
    sortFilter(e) {
      console.log(e);

    },

    toggleFilter() {
      this.isOpenFilter = !this.isOpenFilter;
    },
  },

  mounted() {
    this.$axios.get('https://sonarr.zekainhuman.com/api/v3/series?includeSeasonImages=true&apikey=9281622a2d884926966ea67c432b3b77')
    .then(r=>{
      this.shows = r.data
    })
  }

};
</script>
  
  <style>
html {
  /* font-family: "Manrope"; */
  font-size: 16px;
  font-weight: 400;
}
body {
  display: block;
  margin: 8px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
}

.accordion {
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  padding: 8px;
}

.filter_selector {
}


.filter_selector_item {
  border-bottom: 1px solid #e9e9e9;
  padding: 8px;
  align-items: center;
  color: #3e77aa;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}

.filters {
  height: 100%;
  width: 250px;
}

.filters {
  margin-right: 20px;
  width: 325px !important;
}

.catalog_wrapper {
  display: flex;
  padding: 20px 0;
}

.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}

.list_wrap {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: -moz-fit-content;
  width: fit-content;
}

.content {
  font-size: 13px;
}

.duration-100 {
  transition-duration: 0.1s;
}

.transition-all {
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.rotate-180 {
  --tw-rotate: 180deg;
}

.transform {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1)
    scaleY(1);
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.w-3 {
  width: 0.75rem;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  line-height: inherit;
  padding: 0;
}

[role="button"],
button {
  border: none;
  cursor: pointer;
}

button {
  background-color: transparent;
  background-image: none;
}

button,
select {
  text-transform: none;
}

.flex {
  align-items: center;
  color: #3e77aa;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 100%;
}

.none {
  font-size: 18px;
  height: 55px;
}

.price,
.pricevalues {
  align-items: center;
  display: flex;
}

.price {
  justify-content: space-between;
  width: 100%;
}

.rating_num {
  margin-left: 10px;
}

.full-stars {
  color: #f05252;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

:after,
:before {
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
}

.empty-stars:before,
.full-stars:before {
  content: "★★★★★";
  font-size: 11pt;
}

.full-stars:before {
  -webkit-text-stroke: 1px #f05252;
}

.full-stars {
  color: #f05252;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.empty-stars:before {
  -webkit-text-stroke: 1px gray;
}

.ratings {
  color: #b1b1b1;
  display: flex;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  width: 62px;
}

.rate {
  display: flex;
}

.sale {
  background-color: #f05252;
  border-radius: 6px;
  color: #fff;
  padding: 0 5px;
  position: absolute;
  top: -30px;
}

.product_card .product_title {
  font-size: 15px;
  position: relative;
}

img,
video {
  height: auto;
  max-width: 100%;
}

.card_img {
  position: relative;
}

.label {
  color: #fff;
  font-weight: 600;
  margin-right: 8px;
  padding: 0 5px;
}

.product_card .labels .label {
  font-size: 13px;
}

element.style {
  background-color: rgb(0, 0, 0);
}

.product_card .labels,
.product_card:hover > .control {
  display: flex;
  justify-content: space-between;
}

.product_card .labels {
  min-height: 20px;
}

.favor {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk3MTkgMy4yODk4MkMxMC4xODQ5IDMuMDc1MSAxMC4zNDkzIDIuODc2MzIgMTAuNTI0MiAyLjY4NzM3QzExLjQ3MiAxLjY2NzEyIDEyLjYxNTYgMC45ODg1OTQgMTQuMDA4MiAwLjgxOTI2OUMxNi40MDA5IDAuNTI4NDcxIDE4LjY3MDggMS44Mzc2NyAxOS41NzYzIDQuMTU2MDhDMjAuMjQ1IDUuODY0MDUgMjAuMTA4MiA3LjUzNzA2IDE5LjI4NjEgOS4xNjUyOEMxOC41ODc0IDEwLjU0OTMgMTcuNjAzOSAxMS43MTYyIDE2LjUwNzYgMTIuNzk0MUMxNC45MjQyIDE0LjM1MTggMTMuMTY0MSAxNS42ODg2IDExLjI4OTIgMTYuODcwMkMxMC40NTc5IDE3LjM5MzUgOS41NTMwMiAxNy40MDUyIDguNzI0MTggMTYuODc4OEM2LjQyOTcgMTUuNDIxMSA0LjI4NDMxIDEzLjc3MzkgMi40Nzc1NiAxMS43MjU0QzEuNTE5ODkgMTAuNjM4OSAwLjcwNDU1MSA5LjQ2MDM3IDAuMjYyODMzIDguMDYwMzdDLTAuNTA4MzMyIDUuNjE4MDQgMC40NDY4ODIgMi43NjY1MSAyLjc0MTk3IDEuNDYwMzdDNC41NzgxNyAwLjQxNzQyNyA2Ljg5NzE5IDAuNTc4Nzc3IDguNjQwMTMgMS45Mzk1MUM5LjA2OTU4IDIuMjc1NzEgOS40Mjg0OCAyLjcwNDU0IDkuODE4MDUgMy4wOTE2NkM5Ljg3NTcyIDMuMTQ2MjYgOS45MjY2NCAzLjIxMDA3IDkuOTk3MTkgMy4yODk4MloiIGZpbGw9IiNBOEFEQjEiLz4KPC9zdmc+Cg==);
}

.favor,
.favor_active {
  background-size: cover;
  height: 18px;
  position: absolute;
  right: 2px;
  top: 5px;
  width: 20px;
  z-index: 1;
}

.currprice[data-v-4dbc45fc] {
  color: #f38f00;
  font-size: 22px;
  font-weight: 600;
}

.el-pager li {
  background: #fff;
  box-sizing: border-box;
  font-size: 13px;
  height: 28px;
  line-height: 28px;
  min-width: 35.5px;
  padding: 0 4px;
  text-align: center;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #f38f00;
  color: #fff;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #409eff;
  color: #fff;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #f4f4f5;
  border-radius: 2px;
  color: #606266;
  margin: 0 5px;
  min-width: 30px;
}

.el-pager li.active {
  color: #409eff;
  cursor: default;
}

.el-pager,
.el-pager li {
  display: inline-block;
  margin: 0;
  vertical-align: top;
}

.el-pager li,
.el-pager li.btn-quicknext:hover,
.el-pager li.btn-quickprev:hover {
  cursor: pointer;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #f38f00;
  color: #ffffff;
}

.el-pager,
.el-pager li {
  display: inline-block;
  margin: 0;
  vertical-align: top;
}

.el-pager,
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev {
  padding: 0;
}

.el-pager,
.el-pager li {
  display: inline-block;
  margin: 0;
  vertical-align: top;
}

.el-pager {
  font-size: 0;
  list-style: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.slick-prev {
  left: 10px;
  z-index: 1;
}

.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
  background: transparent;
  color: transparent;
  outline: none;
}
</style>