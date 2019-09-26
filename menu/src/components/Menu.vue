<template>
  <ul class="menu">
      <!-- Vue的插槽 -->
      <slot></slot>
  </ul>
</template>



<style lang = "stylus">
ul 
    margin 0
    padding 0
    text-align center

li
    list-style none 

.menu
    width 200px
    li
        padding 5px
        background-color #4cb4e7
        color #ffffff
        border-bottom 1px solid #fff

</style>