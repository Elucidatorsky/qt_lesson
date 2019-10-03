<!-- 跨组件通信 Vuex provide 这个 -->
<template>
  <div>
      <my-child></my-child>
  </div>
</template>

<script>
import MyChild from './Child'
export default {
    components: {
        MyChild
    },
    provide() {
        return {
            theme: 'red'
        }
    }
}
</script>

<style>

</style>