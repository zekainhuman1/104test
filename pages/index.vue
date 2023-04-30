<template>
  <div>
    <header_bottom />
    <main>
      <slider />
      <new_incom />
      <tabs_cont />
      <!-- <leaflet /> -->
    </main>
    <footerr />
  </div>
</template>

<script>
import header_bottom from "~/components/header_bottom.vue";
import footerr from "~/components/footerr.vue";
import slider from "@/components/slider.vue";
import new_incom from "~/components/new_incom.vue";
import tabs_cont from "~/components/tabs_cont.vue";
// import leaflet from '~/components/leaflet.vue';


export default {
  name: "IndexPage",
  components: {
    header_bottom,
    footerr,
    slider,
    new_incom,
    tabs_cont,
    // leaflet,
},

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

.vue2leaflet-map {
    height: 300px;
    width: 100%;
}
</style>