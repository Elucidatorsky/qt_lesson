<template>
  <div class="template1">
      <p><button @click="addtwo">组件2</button></p>
      template2里的num:{{num}}
  </div>
</template>

<script>
import mixin1 from '../assets/mixin1'
export default {
    mixins: [mixin1],
    methods:{
        addtwo(){
            this.num+=2
        }
    }
}
</script>

<style>

</style>