<template>
  <div class="tabs container">
    <div class="tabs-controller">
      <div class="tab-button" :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">Нові категорії</div>
      <div class="tab-button" :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">Бренди</div>
    </div>
    <div class="tab-1" v-show="activeTab === 'tab1'">
      <div class="item_brand">
        <img
          src="@/img/6yxjw1uigyr81.png"
          alt=""
        />
        <span class="title">Ноутбуки та комп’ютери</span>
      </div>
      <div class="item_brand">
        <img
          src="@/img/IMG_20230416_103915_956.jpg"
          alt=""
        />
        <span class="title">Вбудовувана техніка</span>
      </div>
      <div class="item_brand">
        <img
          src="@/img/IMG_20230427_103046_245.jpg"
          alt=""
        />
        <span class="title">Стационарные</span>
      </div>
      <div class="item_brand">
        <img
          src="@/img/IMG_20230416_220350_539.jpg"
          alt=""
        />
        <span class="title">Побутова техніка</span>
      </div>
      <div class="item_brand">
        <img
          src="@/img/IMG_20230418_000437_494.jpg"
          alt=""
        />
        <span class="title">Техніка для кухні</span>
      </div>
      <div class="item_brand">
        <img
          src="@/img/IMG_20230419_091619_784.jpg"
          alt=""
        />
        <span class="title">Монітори</span>
      </div>
    </div>
    <div class="tab-2" v-show="activeTab === 'tab2'">
      <div class="item_brand">
        <img
          src="@/img/IMG_20230419_190807_178.jpg"
          alt=""
        />
        <span class="title">Foot Locker</span>
      </div>
      <div class="item_brand">
        <img alt="" />
        <span class="title">3M</span>
      </div>
      <div class="item_brand">
        <img alt="" />
        <span class="title">Mastercard</span>
      </div>
      <div class="item_brand">
        <img alt="" />
        <span class="title">Uber</span>
      </div>
      <div class="item_brand">
        <img alt="" />
        <span class="title">Hilton</span>
      </div>
      <div class="item_brand">
        <img alt="" />
        <span class="title">McDonald's</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'tab1' // Установка вкладки по умолчанию
    }
  }
}
</script>

<style>
.item_brand .title {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  text-align: center;
}

.item_brand {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 5.39583px 15.5556px rgba(0, 0, 0, 0.004),
    0 4.93333px 14.2222px rgba(0, 0, 0, 0.017),
    0 4.1625px 12px rgba(0, 0, 0, 0.028),
    0 3.08333px 8.88889px rgba(0, 0, 0, 0.057),
    0 1.69583px 4.88889px rgba(0, 0, 0, 0.084), 0 0 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 176px;
  margin-bottom: 25px;
  padding-top: 20px;
  width: 185px;
}

.tab-1,
.tab-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.item_brand img {
  height: 100px;
  width: 100px;
}

.tabs-controller .tab-button {
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
}

.active {
  color: #f38f00;
}

.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}

.tabs-controller {
  display: flex;
  margin-top: 25px;
}

.tabs {
  flex-direction: column;
  margin-bottom: 25px;
}
</style>
