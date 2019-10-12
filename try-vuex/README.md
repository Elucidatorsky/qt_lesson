-   vuex 数据流
组件 + 共享数据
1. 共享一个状态
-   this.$store
    Vue.use(Vuex) Vue.$store
-   this.$store.state
new Vue({
    store
})
store = new Vuex.Store({
    state,
    ...
})

myVuex Vue.use()
new myVuex.Store(options)
options 四大家族

-   es6的模块化机制
    export default xxx
    vuex 里 index.js 即 { Store, }
-   class get 方法
    Store 是一个类，四大家族是她的属性
    this.$store 对Vue.prototype扩展后，所有的组件都可以调用 
    Vue 钩子函数，beforeCreated 除了她该做的，再做下vuex的初始化
    Vue.minin({
        beforeCreated: 
    })
-   让唯一的store对象， state是属性
    beforeCreated vue 该怎样，
    再多this.$store = this  Vue单例 根组件
    beforeCreated 之前的代码也要运行，Vue.minxin({
        beforeCreate: vueInit
    })
    通过源码 认识到 所有组件都可以访问$store,是因为她已经为vue单例加入了这个属性
    每个组件里的this-> 本组件 -> prototype -> vue单例

-   this.$store.getters.xxxx
    跟state不一样的地方 是方法 这个方法会返回根据state的新的值
    Object.defindProperty(this.$store.getters, xxxx, {
        get () {
            数据劫持
            return store.options.getters[xxxx]
            return getterFn(store.state)
        }
    })

    defineProperty是一个个属性定义
    [key,fn]
    forEachVal()
    registerGetter(this, key, fn)