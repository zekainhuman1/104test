<!-- Please remo
  components: { leaflet },ve this file from your project -->
<template>
  <footer class="footer">
    <div class="section title"><img src="@/img/title.02db07b.png"></div>
    <div class="section company">
        <div class="company_title">Компанія</div>
        <ul>
            <li>Про компанію</li>
            <li>Інформація про продавця</li> 
            <li>Група компаній 104</li> 
            <li>Відділ корпоративного продажу</li>
            <li>Вакансії</li> 
            <li>Тендери</li> 
            <li>Новини маркету</li> 
            <li>Торгівельна нерухомість</li> 
            <li>Соціальні проекти</li> 
            <li>Контакти прес-служби</li> 
            <li>Умови використання сайту</li> 
            <li>Політика конфіденційності</li> 
            <li>Стати партнером</li>
        </ul>
    </div>
    <div class="section company">
        <leaflet />
    </div>
    <!-- <div class="section company">
        <div class="company_title">Покупцям</div> 
        <ul>
            <li>Адреси магазинів “104.юа”</li> 
            <li>Партнери</li> 
            <li>Оплата</li> 
            <li>Повернення товару</li> 
            <li>Доставка</li> 
            <li>Блог</li> 
            <li>Акції</li> 
            <li>Послуги</li> 
            <li>Бренди</li> 
            <li>Подарункові карти</li>
            <li>Розпродаж</li> 
            <li>Політика конфіденційності</li> 
            <li>Найс Прайс</li>
        </ul>
    </div> 
    <div class="section company">
        <div class="company_title">Контакти</div> 
        <ul>
            <li>Режим роботи</li> 
            <li>Магазини по всій Україні</li> 
            <li>Інформаційна служба</li> 
            <li>Графік роботи Call-Центру</li> 
            <li class="phone">0 800 104 104</li> 
            <li>Пт-Пн  8:30 - 21:00</li> 
            <li>Сб-Нд  8:30 - 22:00</li>
        </ul>
    </div> -->
</footer>
</template>

<script>
import leaflet from './leaflet.vue';

export default {
  name: "IndexPage",
  components: {
    leaflet,
},

};

</script>

<style>

.footer {
    background-color: #f9fafb;
    display: flex;
}
.section {
    font-size: 14px;
    padding: 25px;
    width: 33%;
}
.company_title {
    font-size: 18px;
    font-weight: 600;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}

</style>