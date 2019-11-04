<template>
  <div class="template1">
      <p><button @click="addone">组件1</button></p>
      template1里的num:{{num}}
  </div>
</template>

<script>
import mixin1 from '../assets/mixin1'
export default {
    mixins: [mixin1],
    methods:{
        addone(){
            this.num++
        }
    }
}
</script>

<style>

</style>