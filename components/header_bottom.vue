<template>
  <header class="header_bottom">

    <!-- Меню -->
    <div class="mega_menu">
      <div class="mega_menu_wrap container">
        <div class="selector" v-show="isOpenMenu">
          <div class="item_selector first_menu" @mouseover="activeGroup = 1">
            Ноутбуки та комп’ютери
          </div>
          <div class="item_selector" @mouseover="activeGroup = 2">
            Інструменти
          </div>
          <div class="item_selector" @mouseover="activeGroup = 4">
            Будівельні матеріали
          </div>
          <div class="item_selector" @mouseover="activeGroup = 5">
            Оздоблювальний інструмент
          </div>
          <div class="item_selector" @mouseover="activeGroup = 6">
            Сантехніка
          </div>
          <div class="item_selector" @mouseover="activeGroup = 7">
            TV і відеотехніка
          </div>
          <div class="item_selector" @mouseover="activeGroup = 8">
            Комп'ютерна техніка та програмне забезпечення
          </div>
          <div class="item_selector" @mouseover="activeGroup = 9">Меблі</div>
          <div class="item_selector" @mouseover="activeGroup = 10">
            Спецодяг та взуття
          </div>
          <div class="item_selector" @mouseover="activeGroup = 11">
            Замовити послугу
          </div>
          <div class="item_selector" @mouseover="activeGroup = 12">Взуття</div>
        </div>
        <div class="groups" v-if="activeGroup" v-show="isOpenMenu">
          <div
            class="group_item"
            v-for="(group, index) in groups[activeGroup - 1]"
            :key="index"
          >
            <div class="item_title">{{ group.title }}</div>
            <div
              class="sub_group"
              v-for="(subGroup, subIndex) in group.subGroups"
              :key="subIndex"
            >
              {{ subGroup }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Шапка -->
    <div class="header_bottom__wrapper container">
      <div class="header_catalog">
        <a
          href="/"
          aria-current="page"
          class="all nuxt-link-exact-active nuxt-link-active"
        >
          <div class="logo">
            <img src="@/img/logo.bc783f5.svg" alt="" class="logo_icon" />
            <img src="@/img/market.545b9d8.svg" alt="" class="market_icon" />
          </div>
        </a>
        <div class="catalog_btn" @click="toggleMenu">
          <img
            src="data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+CiAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMTIsNDJINDhhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDE0LDYuMDAwMTQsMCwwLDAsNiw2aDY0YTYuMDAwMTQsNi4wMDAxNCwwLDAsMCw2LTZWNDhBNi4wMDAxNCw2LjAwMDE0LDAsMCwwLDExMiw0MlptLTYsNjRINTRWNTRoNTJaTTIwOCw0MkgxNDRhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDE0LDYuMDAwMTQsMCwwLDAsNiw2aDY0YTYuMDAwMTQsNi4wMDAxNCwwLDAsMCw2LTZWNDhBNi4wMDAxNCw2LjAwMDE0LDAsMCwwLDIwOCw0MlptLTYsNjRIMTUwVjU0aDUyWm0tOTAsMzJINDhhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDI5LDYuMDAwMjksMCwwLDAsNiw2aDY0YTYuMDAwMjksNi4wMDAyOSwwLDAsMCw2LTZWMTQ0QTYuMDAwMTQsNi4wMDAxNCwwLDAsMCwxMTIsMTM4Wm0tNiw2NEg1NFYxNTBoNTJabTEwMi02NEgxNDRhNi4wMDAxNCw2LjAwMDE0LDAsMCwwLTYsNnY2NGE2LjAwMDI5LDYuMDAwMjksMCwwLDAsNiw2aDY0YTYuMDAwMjksNi4wMDAyOSwwLDAsMCw2LTZWMTQ0QTYuMDAwMTQsNi4wMDAxNCwwLDAsMCwyMDgsMTM4Wm0tNiw2NEgxNTBWMTUwaDUyWiIvPgo8L3N2Zz4K"
            alt=""
            class="open"
          />
          <span class="catalog">Каталог</span>
        </div>
      </div>
      <div class="search">
        <div class="concave">
          <a href="/search" class="all">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjE2NjY3IDMuNUM2LjAzNzA1IDMuNSAzLjUgNi4wMzcwNSAzLjUgOS4xNjY2N0MzLjUgMTIuMjk2MyA2LjAzNzA1IDE0LjgzMzMgOS4xNjY2NyAxNC44MzMzQzEyLjI5NjMgMTQuODMzMyAxNC44MzMzIDEyLjI5NjMgMTQuODMzMyA5LjE2NjY3QzE0LjgzMzMgNi4wMzcwNSAxMi4yOTYzIDMuNSA5LjE2NjY3IDMuNVpNMS41IDkuMTY2NjdDMS41IDQuOTMyNDggNC45MzI0OCAxLjUgOS4xNjY2NyAxLjVDMTMuNDAwOCAxLjUgMTYuODMzMyA0LjkzMjQ4IDE2LjgzMzMgOS4xNjY2N0MxNi44MzMzIDEzLjQwMDggMTMuNDAwOCAxNi44MzMzIDkuMTY2NjcgMTYuODMzM0M0LjkzMjQ4IDE2LjgzMzMgMS41IDEzLjQwMDggMS41IDkuMTY2NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE2NzkgMTMuMTY3OUMxMy41NTg0IDEyLjc3NzQgMTQuMTkxNiAxMi43Nzc0IDE0LjU4MjEgMTMuMTY3OUwxOC4yMDcxIDE2Ljc5MjlDMTguNTk3NiAxNy4xODM0IDE4LjU5NzYgMTcuODE2NiAxOC4yMDcxIDE4LjIwNzFDMTcuODE2NiAxOC41OTc2IDE3LjE4MzQgMTguNTk3NiAxNi43OTI5IDE4LjIwNzFMMTMuMTY3OSAxNC41ODIxQzEyLjc3NzQgMTQuMTkxNiAxMi43Nzc0IDEzLjU1ODQgMTMuMTY3OSAxMy4xNjc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
              alt=""
              class="search_img"
            />
          </a>
          <div class="rightconcave"></div>
        </div>
        <input value="" class="header_search" />
        <div class="search_list" style="display: none">
          <div class="list_item" style="display: none">
            <hr class="separate" />
          </div>
          <div class="list_item" style="display: none">
            <hr class="separate" />
          </div>
          <div class="list_item" style="display: none">
            <hr class="separate" />
          </div>
        </div>
      </div>
      <div class="header_controls">
        <a href="/favorite" class="all">
          <div class="wrap_control">
            <div class="control_icon favorite">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjg0IDMuNjA5OTlDMjAuMzI5MiAzLjA5OSAxOS43MjI4IDIuNjkzNjQgMTkuMDU1NCAyLjQxNzA4QzE4LjM4NzkgMi4xNDA1MiAxNy42NzI1IDEuOTk4MTcgMTYuOTUgMS45OTgxN0MxNi4yMjc1IDEuOTk4MTcgMTUuNTEyMSAyLjE0MDUyIDE0Ljg0NDYgMi40MTcwOEMxNC4xNzcyIDIuNjkzNjQgMTMuNTcwOCAzLjA5OSAxMy4wNiAzLjYwOTk5TDEyIDQuNjY5OTlMMTAuOTQgMy42MDk5OUM5LjkwODMgMi41NzgzIDguNTA5MDMgMS45OTg3IDcuMDUgMS45OTg3QzUuNTkwOTYgMS45OTg3IDQuMTkxNjkgMi41NzgzIDMuMTYgMy42MDk5OUMyLjEyODMgNC42NDE2OSAxLjU0ODcxIDYuMDQwOTYgMS41NDg3MSA3LjQ5OTk5QzEuNTQ4NzEgOC45NTkwMyAyLjEyODMgMTAuMzU4MyAzLjE2IDExLjM5TDQuMjIgMTIuNDVMMTIgMjAuMjNMMTkuNzggMTIuNDVMMjAuODQgMTEuMzlDMjEuMzUxIDEwLjg3OTIgMjEuNzU2MyAxMC4yNzI4IDIyLjAzMjkgOS42MDUzNUMyMi4zMDk1IDguOTM3ODkgMjIuNDUxOCA4LjIyMjQ4IDIyLjQ1MTggNy40OTk5OUMyMi40NTE4IDYuNzc3NTEgMjIuMzA5NSA2LjA2MjEgMjIuMDMyOSA1LjM5NDY0QzIxLjc1NjMgNC43MjcxOCAyMS4zNTEgNC4xMjA3NSAyMC44NCAzLjYwOTk5VjMuNjA5OTlaIiBzdHJva2U9IiMwRDBEMEQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                alt=""
              />
            </div>
            <div class="count">0</div>
          </div>
        </a>
        <a href="/cart" class="all">
          <div class="wrap_control">
            <div class="control_icon">
              <img src="@/img/cart2.3ba4f67.svg" alt="" />
            </div>
            <div class="count" data-v-278ddcd1="">0</div>
          </div>
        </a>
        <div class="auth" data-v-278ddcd1="">Увійти</div>
      </div>
    </div>
    <hr class="line" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
      activeGroup: 0,
      groups: [
        [
          {
            title: "Комп'ютери, неттопи, моноблоки",
            subGroups: ["Стационарные", "Неттопы"],
          },
          { title: "Монітори", subGroups: [] },
          { title: "Планшети", subGroups: [] },
          {
            title: "Бренди",
            subGroups: ["<img src=''>"],
            allBrands: "Всі бренди",
          },
        ],
        [
          {
            title: "Електроінструменти",
            subGroups: [
              "Шуруповерти",
              "Болгарки",
              "Напильники",
              "Перфоратори",
              "Дрилі",
              "Дискові пилки",
            ],
          },
          {
            title: "Енергозабезпечення",
            subGroups: [
              "Генератори",
              "Теплові пушки",
              "Сонячні панелі",
              "Компресори",
            ],
          },
          {
            title: "Інструменти",
            subGroups: [
              "Викрутки",
              "Монтажні пістолети",
              "Пили",
              "Мультитули",
              "Ломи та гвоздодери",
              "Молотки",
              "Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "1Електроінструменти",
            subGroups: [
              "1Шуруповерти",
              "1Болгарки",
              "1Напильники",
              "1Перфоратори",
              "1Дрилі",
              "1Дискові пилки",
            ],
          },
          {
            title: "1Енергозабезпечення",
            subGroups: [
              "1Генератори",
              "1Теплові пушки",
              "1Сонячні панелі",
              "1Компресори",
            ],
          },
          {
            title: "1Інструменти",
            subGroups: [
              "1Викрутки",
              "1Монтажні пістолети",
              "1Пили",
              "1Мультитули",
              "1Ломи та гвоздодери",
              "1Молотки",
              "1Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "2Електроінструменти",
            subGroups: [
              "2Шуруповерти",
              "2Болгарки",
              "2Напильники",
              "2Перфоратори",
              "2Дрилі",
              "2Дискові пилки",
            ],
          },
          {
            title: "2Енергозабезпечення",
            subGroups: [
              "2Генератори",
              "2Теплові пушки",
              "2Сонячні панелі",
              "2Компресори",
            ],
          },
          {
            title: "2Інструменти",
            subGroups: [
              "2Викрутки",
              "2Монтажні пістолети",
              "2Пили",
              "2Мультитули",
              "2Ломи та гвоздодери",
              "2Молотки",
              "2Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "3Електроінструменти",
            subGroups: [
              "3Шуруповерти",
              "3Болгарки",
              "3Напильники",
              "3Перфоратори",
              "3Дрилі",
              "3Дискові пилки",
            ],
          },
          {
            title: "3Енергозабезпечення",
            subGroups: [
              "3Генератори",
              "3Теплові пушки",
              "3Сонячні панелі",
              "3Компресори",
            ],
          },
          {
            title: "3Інструменти",
            subGroups: [
              "3Викрутки",
              "3Монтажні пістолети",
              "3Пили",
              "3Мультитули",
              "3Ломи та гвоздодери",
              "3Молотки",
              "3Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "4Електроінструменти",
            subGroups: [
              "4Шуруповерти",
              "4Болгарки",
              "4Напильники",
              "4Перфоратори",
              "4Дрилі",
              "4Дискові пилки",
            ],
          },
          {
            title: "4Енергозабезпечення",
            subGroups: [
              "4Генератори",
              "4Теплові пушки",
              "4Сонячні панелі",
              "4Компресори",
            ],
          },
          {
            title: "4Інструменти",
            subGroups: [
              "4Викрутки",
              "4Монтажні пістолети",
              "4Пили",
              "4Мультитули",
              "4Ломи та гвоздодери",
              "4Молотки",
              "4Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "5Електроінструменти",
            subGroups: [
              "5Шуруповерти",
              "5Болгарки",
              "5Напильники",
              "5Перфоратори",
              "5Дрилі",
              "5Дискові пилки",
            ],
          },
          {
            title: "5Енергозабезпечення",
            subGroups: [
              "5Генератори",
              "5Теплові пушки",
              "5Сонячні панелі",
              "5Компресори",
            ],
          },
          {
            title: "5Інструменти",
            subGroups: [
              "5Викрутки",
              "5Монтажні пістолети",
              "5Пили",
              "5Мультитули",
              "5Ломи та гвоздодери",
              "5Молотки",
              "5Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "6Електроінструменти",
            subGroups: [
              "6Шуруповерти",
              "6Болгарки",
              "6Напильники",
              "6Перфоратори",
              "6Дрилі",
              "6Дискові пилки",
            ],
          },
          {
            title: "6Енергозабезпечення",
            subGroups: [
              "6Генератори",
              "6Теплові пушки",
              "6Сонячні панелі",
              "6Компресори",
            ],
          },
          {
            title: "6Інструменти",
            subGroups: [
              "6Викрутки",
              "6Монтажні пістолети",
              "6Пили",
              "6Мультитули",
              "6Ломи та гвоздодери",
              "6Молотки",
              "6Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "7Електроінструменти",
            subGroups: [
              "7Шуруповерти",
              "7Болгарки",
              "7Напильники",
              "7Перфоратори",
              "7Дрилі",
              "7Дискові пилки",
            ],
          },
          {
            title: "7Енергозабезпечення",
            subGroups: [
              "7Генератори",
              "7Теплові пушки",
              "7Сонячні панелі",
              "7Компресори",
            ],
          },
          {
            title: "7Інструменти",
            subGroups: [
              "7Викрутки",
              "7Монтажні пістолети",
              "7Пили",
              "7Мультитули",
              "7Ломи та гвоздодери",
              "7Молотки",
              "7Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "8Електроінструменти",
            subGroups: [
              "8Шуруповерти",
              "8Болгарки",
              "8Напильники",
              "8Перфоратори",
              "8Дрилі",
              "8Дискові пилки",
            ],
          },
          {
            title: "8Енергозабезпечення",
            subGroups: [
              "8Генератори",
              "8Теплові пушки",
              "8Сонячні панелі",
              "8Компресори",
            ],
          },
          {
            title: "8Інструменти",
            subGroups: [
              "8Викрутки",
              "8Монтажні пістолети",
              "8Пили",
              "Мультитули",
              "8Ломи та гвоздодери",
              "8Молотки",
              "8Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "9Електроінструменти",
            subGroups: [
              "9Шуруповерти",
              "9Болгарки",
              "9Напильники",
              "9Перфоратори",
              "Дрилі",
              "9Дискові пилки",
            ],
          },
          {
            title: "9Енергозабезпечення",
            subGroups: [
              "9Генератори",
              "9Теплові пушки",
              "9Сонячні панелі",
              "9Компресори",
            ],
          },
          {
            title: "9Інструменти",
            subGroups: [
              "9Викрутки",
              "9Монтажні пістолети",
              "9Пили",
              "Мультитули",
              "9Ломи та гвоздодери",
              "9Молотки",
              "9Тримачі інструментів",
            ],
          },
        ],
        [
          {
            title: "10Електроінструменти",
            subGroups: [
              "10Шуруповерти",
              "10Болгарки",
              "10Напильники",
              "10Перфоратори",
              "Дрилі",
              "10Дискові пилки",
            ],
          },
          {
            title: "10Енергозабезпечення",
            subGroups: [
              "10Генератори",
              "10Теплові пушки",
              "10Сонячні панелі",
              "10Компресори",
            ],
          },
          {
            title: "10Інструменти",
            subGroups: [
              "10Викрутки",
              "10Монтажні пістолети",
              "10Пили",
              "Мультитули",
              "10Ломи та гвоздодери",
              "10Молотки",
              "10Тримачі інструментів",
            ],
          },
        ],
      ],
    };
  },

  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style>
.header_bottom {
  background-color: #fff;
  padding: 10px 0;
  position: sticky;
  top: 0;
  width: 10%;
  z-index: 6;
}

.header_bottom .header_bottom__wrapper[data-v-278ddcd1] {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 20px;
  position: sticky;
  top: 0;
}

img,
video {
  height: auto;
  max-width: 100%;
}
.logo .logo_icon {
  margin-right: 15px;
  width: 40px;
}
* {
  font-size: 16px;
  font-weight: 400;
}
.logo .market_icon[data-v-278ddcd1] {
  margin-bottom: -6px;
  width: 80px;
}
.logo {
  display: flex;
  justify-content: center;
  margin-right: 40px;
}
a {
  color: #3e77aa;
  text-decoration: inherit;
}
.catalog_btn {
  align-items: center;
  background-color: #f38f00;
  background: #f38f00;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 7px;
  height: 25px;
  justify-content: center;
  margin-right: 20px;
  padding: 10px 15px;
  width: 116px;
}
.header_bottom .header_catalog {
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
}
.catalog_btn .open {
  width: 30px;
}
.header_bottom .header_catalog span {
  color: #fff;
  font-size: 18px;
}
.catalog_btn .catalog {
  font-size: 14px !important;
}
.header_bottom .search {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.concave {
  align-items: center;
  background: #f38f00;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 41px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1px;
  width: 58px;
  z-index: 1;
}
.header_bottom .header_search {
  border: 2px solid #f38f00;
  border-radius: 8px;
  flex-grow: 1;
  height: 39px;
  padding-left: 10px;
  position: relative;
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
.rightconcave {
  background: #fff;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  height: 39px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 6px;
}
.search_img {
  cursor: pointer;
  height: 26px;
  margin-left: 8px;
}
.header_bottom .search_list {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 100px 40px rgba(0, 0, 0, 0.01), 0 56px 34px rgba(0, 0, 0, 0.05),
    0 25px 25px rgba(0, 0, 0, 0.09), 0 6px 14px rgba(0, 0, 0, 0.1),
    0 0 0 rgba(0, 0, 0, 0.1);
  left: 0;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 44px;
}
.header_bottom .list_item {
  padding: 3px;
}
.header_bottom .separate {
  margin-left: 35px;
  margin-top: 5px;
  width: 95%;
}
.line {
  margin-top: 10px;
}
hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
}
.header_bottom .header_controls {
  align-items: center;
  display: flex;
}
.header_bottom .header_controls .wrap_control {
  position: relative;
}
.header_bottom .header_controls .cart,
.header_bottom .header_controls .compare,
.header_bottom .header_controls .favorite {
  cursor: pointer;
}
.header_bottom .header_controls .control_icon {
  height: 25px;
  margin-left: 60px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 25px;
}
.header_bottom .header_controls .count {
  align-items: center;
  background-color: #f38f00;
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 12px;
  height: 16px;
  justify-content: center;
  position: absolute;
  right: -15px;
  top: -6px;
  width: 22px;
}
.auth {
  background-color: #f38f00;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-left: 30px;
  padding: 8px 15px;
}
.header_bottom .header_controls .control_icon {
  height: 25px;
  margin-left: 60px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 25px;
}
.header_bottom {
  background-color: #fff;
  padding: 10px 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 6;
}
.page {
  display: flex;
  flex-direction: column;
}
.mega_menu {
  background-image: linear-gradient(90deg, #f3f3f3 50%, #fff 0);
  box-shadow: 77px 81px 45px rgba(0, 0, 0, 0.01),
    43px 45px 38px rgba(0, 0, 0, 0.05), 19px 20px 28px rgba(0, 0, 0, 0.09),
    5px 5px 15px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1);
  display: flex;
  left: 0;
  position: absolute;
  right: 0;
  top: 61px;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
}
.mega_menu .selector {
  background-color: #f3f3f3;
  padding: 15px 0 25px;
  width: 27%;
}
.mega_menu .groups {
  background-color: #fff;
  width: 73%;
}
.groups {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
  padding: 20px;
}
.active_menu:hover,
.first_menu {
  background-color: #fff;
  color: #f38f00;
}
.mega_menu .selector .item_selector {
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  padding: 5px 0 5px 15px;
}
.groups .group_item {
  height: -moz-fit-content;
  height: fit-content;
  margin-bottom: 20px;
  margin-right: 20px;
  white-space: nowrap;
}
.groups .group_item .item_title {
  color: #f38f00;
  cursor: pointer;
  line-height: 2.2;
  padding-left: 10px;
}
.groups .group_item .sub_group {
  cursor: pointer;
  font-size: 14px;
  line-height: 2.2;
  padding-left: 20px;
}
.groups .group_item .sub_group {
  cursor: pointer;
  font-size: 14px;
  line-height: 2.2;
  padding-left: 20px;
}
</style>