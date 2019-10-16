-   product cart
    相同数据：
    商口数据
    数量
    cart ?
-   模块化后，看一眼设计稿，看一下核心的状态，状态的修改
    添加核心的mutations, actions设计好
    state -> actions -> api -> mutations -state
    数据的流转进行逻辑设计
-   添加到购物车模块下
    cart.state.items
    mapActions('cart', {
        addProductToCart
    })