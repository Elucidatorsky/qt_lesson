-   Vue
    VueRouter 路由
    Vuex 数据流

    ElementUI PC开发框架
    MinUi/IVIEW mobile开发框架

    插件 
    Vue 瘦身的 MVVM
    其他的都是他的周边生态
    插件机制往里面加
    Vue.use(plugin)
    plugin 按照一定的规定
    this.$route
    Vue.prototype

-   ElementUI 有两种引入组件的方式
    <el-button />  
    Vue.component(component.name, component)  或 new
    const components = []
    components.forEach((component) => {
        Vue.component (component.name, component);
    })

-   写一个Vue 组件，开源的插件 100+
    {
        install: function() {
            Vue.component(component.name, component);
            Vue.prototype.$message = Message;
        }
    }
    Vue.use(plugin) 执行install