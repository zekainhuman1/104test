<template>
    <div id="map-wrap" style="height: 333px">
 <client-only>
   <l-map :zoom=13 :center="[49.602976,34.486841]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[49.602976,34.486841]"></l-marker>
   </l-map>
 </client-only>
</div>
</template>


<script>


</script>

<style>

</style>