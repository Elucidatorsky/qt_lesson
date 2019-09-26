// 使用hash
class HashRouter{
    // 构造函数
    constructor() {
        // 点击锚链接触发此事件
        // window.addEventListener('hashchange', (event) => {
        //     // 正则表达式 /#/page1 得到/page location.href即网址 location.hash即#/page .slice(1)
        //     // console.log(location);
        // })
        // Key(/page1) => val (func 由外界传进来)
        this.routers = {};
        // 当URL的片段标识符更改时，将触发hashchange事件
        // this.load.bind(this) 将load里的this指向改为指向外部对象HashRouter
        console.log('constructor');
        window.addEventListener('hashchange', this.load.bind(this))
    }
    register (hash, callback = function() {}) {
        console.log('register');
        console.log('callback', callback);
        console.log('this', this);
        console.log('this.routers', this.routers);
        this.routers[hash] = callback; // 赋值下标返回方法到路由 重要！！！
    }

    registerNotFound(callback = function(){}) {
        this.routers['404'] = callback;
    }
    registerError(callback = function() {}){
        this.routers['error'] = callback;
    }
        // 触发Hashchange后加载对应页面
    load() {
        console.log('load this', this);
        let hash = location.hash.slice(1), handler;//handler处理函数，处理路由内部函数
        // container 显示相应的page内容
        // 点击链接显示哪个页面由外界决定
        // handler = this.routers[hash]; 
        //仅限于对象自身的属性，而不去查找原型链上的属性
        if(!this.routers.hasOwnProperty(hash)) {//是否自己拥有这个属性
            console.log('404');
            handler = this.routers['404'];
        } else {
            handler = this.routers[hash];
            console.log(hash);
        }
        try {
            console.log('try this', this);
            handler.apply(this);
        } catch(e) {
            console.error(e);
            (this.routers['error'] || function() {}).call(this, e);
        }
    }
}
