import shop from '../../api/shop'
const state = {
    all: [] // 有多少个商品 所有的商品
}

const actions = {
    getAllProducts({commit}) {
        // api请求 提供方法
        console.log('getAllProducts')
        shop.getProducts((products) => {
            // 得到的products返回回来的函数去提交
            console.log('前端到api，callback 回来了', products);
            commit('setProducts', products)
        })
    }
}
const mutations = {
    setProducts(state, products){
        state.all = products
    },
    decrementProductInventory(state, { id }) { // 减少商品数量
        const product = state.all.find(product => product.id == id);
        product.inventory -- // 数量-1
    }   
}
export default {
    namespaced: true,
    actions,
    mutations,
    state
}