<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    triggerFn() {
      this.$emit('submit', 'hello');
    }
  },
  mounted() {
    this.$on(['submit', 'commit'], this.handleEvents); // 以数组方式监听事件

    this.$on('submit', this.handleEvents); // 监听到同一个事件后可执行多个回调方法
    this.$on('submit', this.handleEvents1); // 监听到同一个事件后可执行多个回调方法
    this.$on('submit', this.handleEvents2); // 监听到同一个事件后可执行多个回调方法
  }
};
</script>
