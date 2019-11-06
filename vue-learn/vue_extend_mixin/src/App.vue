<template>
  <div id="app">
    我是app的num:{{num}}
    <!-- <components1></components1> -->
    <!-- <components2></components2> -->
  </div>
</template>

<script>
import Vue from 'vue'
import mixin1 from './assets/mixin1'
import mixin2 from './assets/mixin2'
import Vue_extend from './assets/Vue_extend'
import extend from './assets/extend'
// import components1 from './components/components1'
// import components2 from './components/components2'
var Profile1 = Vue.extend(Vue_extend)
Vue.mixin(mixin1)
new Profile1().$mount('#app')
export default {
  name: 'App',
  mixins:[mixin2],
  extends: extend,
  components: {
    // components1,
    // components2
  },
  created() {
      console.log("我是原生app的")
  }
}
</script>

<style>
</style>
