<template>
  <div>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{product.title}} - {{product.price}}
              <br>
              <button>Add to cart</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'; //将状态映射到本地
export default {
    // data () {  组件的自身状态 好处：随便搞 坏处：共享风险 私有的，在多个使用它时，每个状态变得不一致
    //     return{
    //         products: []
    //     }
    // }  vuex不需要
    // 计算属性，计算后返回一个函数值
    // 组件数据来源
    computed: mapState({ // xxx: xx
        products: state => state.products.all
    }),
    // 生命周期
    created() {
        // Vue.use(Vuex);   dispatch 派发动作的概念
        // 组件不再接触数据了，连api都不要
        this.$store.dispatch('products/getAllProducts')
    }

}
</script>

<style lang="">

</style>