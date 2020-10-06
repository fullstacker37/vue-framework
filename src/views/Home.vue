<template>
  <div>
    <slot name="header" :user="obj" :section="'header'">
      <div>默认header</div>
    </slot>
    <slot :user="obj" :section="'body'">默认body</slot>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
export default {
  name: "Home",
  data () {
    return {
      obj: { a: 1, b: 2 }
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>
