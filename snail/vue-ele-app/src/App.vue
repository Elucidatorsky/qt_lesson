<template>
  <div id="app">
    <!-- 给子组件绑定一个 seller组件 "seller" => 父组件 -->
    <v-header :seller="seller"></v-header>
    <!-- 其他页面展示 -->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    // 不与默认组件冲突
    'v-header': header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d317f2865f3196e6e87196c/example/vue-eleme-seller#!method=get')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          // 将请求到的放到seller去 两个对象之间拼接
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
  .tab
    display flex
    height 40px
    align-items center
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    &-item
      text-align center
      flex 1

      & > a
        display block
        font-style 14px
        color rgb(77, 85, 93)
        text-decoration none

        &.router-link-active // 自动加类名
          color rgb(240,20,20)
</style>
