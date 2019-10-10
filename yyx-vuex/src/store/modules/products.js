import shop from '../../api/shop'

const state = {
  all:[
   
  ]
}

const getters = {}

const actions = {
  // vuex 给actions的， commit 报告给 mutations => state
  getAllProducts({ commit }) {
    // api
    console.log('getAllProducts')
    shop.getProducts((products) => {
      console.log('前端到api，callback 回来了', products);
      commit('setProducts', products)
    }) // (cb)
    // 由 mutations 搞定 
  }
}
// 可以改state
const mutations = {
    setProducts(state, products) {
        state.all = products
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}