<template>
  <div>
    <header_bottom />
    <main>
        <arrived_comp />
    </main>
  </div>
</template>
  
<script lang="js">
import header_bottom from "~/components/header_bottom.vue";
import arrived_comp from "~/components/arrived_comp.vue";

export default {
  name: "IndexPage",
  components: {
    header_bottom,
    arrived_comp,
  },
};
</script>
  
<style>
</style>