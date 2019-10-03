<template>
  <div>
      <h2 :style="{
          color: theme
      }">
        想学基础
      </h2>
  </div>
</template>

<script>
export default {
    inject: ['theme']
}
</script>

<style>

</style>