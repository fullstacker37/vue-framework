<template>
  <div id="app">
    <div class="left">
      <main-menu></main-menu>
    </div>
    <div class="right">
      <main-tabs></main-tabs>
    </div>
  </div>
</template>

<script>
import mainMenu from "./components/menu.vue";
import mainTabs from "./components/tabs";

export default {
  name: "App",
  components: {
    mainMenu,
    mainTabs
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss">
$menuWidth: 300px;
.left {
  width: $menuWidth;
  float: left;
}
.right {
  width: calc(100% - $menuWidth);
  float: left;
}
</style>
