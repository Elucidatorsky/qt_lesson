VUE REACT  SPA Single Page Application 应用体验更好，页面会白一下
传统网页的开发之中 是通过链接组织起来的，重新加载新的页面，新的http请求
/about req, res 过程
req /about
事件 网络传输时间，01二进制，对应着电频信号 光速 + node/java/python 后端代码， 查数据库执行的时间，把html返回回去 = 白屏时间
白屏时间>1.5s 用户就会离开 
res /about about.html
路由是独立的
    原网站模式MVC  应用(vue app)体验产生路由 白屏问题
VueRouter 来了
-   hashRouter
    #/shop   #/xxx
    锚链接
    优点：支持ie8以上
    缺点：路由不纯粹，   /shop
HistoryRouter history 历史的 /shop   访问历史，记录
VUERouter 两种实现方式 = HashRouter(兼容性) + HistoryRouter(无歧义 没有#，移动端兼容性没有问题)
