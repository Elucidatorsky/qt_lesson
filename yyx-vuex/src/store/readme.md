-   先看页面，再写vuex
    focus 数据流设计
-   modules 
    宏观设计一个项目
    有多少模块 对应于vuex中的一个数据单元设计 都由四大家族构成
    Store 单一状态树
    树 
    生成export default new Vuex.Store({
        小型项目不要用vuex，很复杂，简单的就用组件传值 props + emit
        大型项目状态多 用vuex + modules
    }) 实例化生成一个唯一的

    this.$store.products.items
    this.$store.cart.items
    namespace: true

前后端分离
-   传统 Vue
    mounted()
        axios /api/products/:1
        this.products = 
-   vuex
    products数据不在vuex里, []
    组件 mounted()
        去调用 actions
            去调用 axios /api/products/:1
            mutation
            products.all