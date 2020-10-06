<template>
  <div id="app">
    <home>
      <template v-slot:[type]="{user}">
        <div>this is {{user}}</div>
      </template>
    </home>
    <button @click="change">switch header and body</button>
  </div>
</template>
<script>
/* eslint-disable */
import Home from "./views/Home.vue";
export default {
  components: {
    Home
  },
  data() {
    return {
      type: 'header'
    }
  },
  methods: {
    change() {
      this.type = this.type === 'header' ?  'default' : 'header';
    }
  }
}
</script>

<style lang="scss">

</style>
