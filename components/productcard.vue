<template>
  <div class="product_card" rate="2.7" labels="[object Object]" price="1005">
    <div class="opacity" style="display: none"></div>
    <span class="favor"></span>

    <div class="labels">
      <div class="label" style="background-color: rgb(0, 0, 0)">New!</div>
    </div>
    <img
      :src="'https://sonarr.zekainhuman.com' + this.$props.item.images[1].url"
      alt=""
      class="card_img"
    />
    <div class="product_title">
      {{this.$props.item.title}}
      <div class="sale">-20%</div>
    </div>
    <div class="rate">
      <div class="ratings">
        <div class="empty-stars"></div>
        <div class="full-stars" style="width: 54%"></div>
      </div>
      <div class="rating_num">2.7</div>
    </div>
    <div class="price">
      <div class="pricevalues">
        <div class="currprice">1 005 ₴</div>
        <del class="oldprice"> 1 206 ₴</del>
      </div>
      <div class="cart">
        <img
          src="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBjb2xvcj0id2hpdGUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjIxIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2IiAvPgo8L3N2Zz4K"
          alt=""
          class="cart_icon"
        />
      </div>
      <div class="added" style="display: none">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjggMUw1LjUwMDE2IDEwLjE2NjdMMS4zMzM1IDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
          alt=""
          class="cart_icon"
        />
      </div>
    </div>
    <div class="none" style="display: none">Немає в наявності</div>
    <div class="qty" style="display: none">1</div>
  </div>
</template>

<script>

export default {
  // data: function() {
  //   return {
  //     item: {}
  //   }
  // },
  
  // methods: {},

  props: ['item'],

  mounted() {
      
    }
  }

</script>


<style>

</style>