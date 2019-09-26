-   css 处理
    - 某个盒子里的子元素占据一页
    - 事件 onscroll 很多次 ， 节流(防抖)
    - transform transition
    - 面向对象
-   jquery API $()怎么实现？
    $(fn) 原生js也是有生命周期(vue)的，我们叫他事件
    JS是基于事件的脚步语言 找对的生命周期
    $('container') 简化了 querySelector方法
    typeof 参数  是function时 走分支
    .find()查找 querySelector
    .css(cssname, val) .height()  设置css

    VUE 全都没有
    VUE 是 MVVM 的  尽量减少DOM编程， querySelector ....
    css DOM的查打， 执行， 都是要花很多内存的， VUE可以优化它

    VUE 生命周期    js 事件
    .innerHTML  css  width()
    <template>
        <div :width="width">
            {{content}}
        </div>
    </template>
    可以减少DOM操作，