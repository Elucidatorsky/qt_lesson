## 静态资源
静态：不会随着服务器运行而改变的资源,资源都是放到服务器上面的
常见的静态资源：html css js jpg

## 浏览器
file://XX.html
http://localhost:9090/
http://localhost:9090/XX.jpg
支持了两个不同的协议

1. 浏览器知道这是一个html
2. script img link src属性 浏览器会请求对应的src 得到结果
3. 服务器 要返回 对应的内容 js/css
4. 
http://127.0.0.1:8080/xx.jpg
和磁盘路径 一一 对应
req.url === c:xx.jpg
作用：统一处理了 静态资源的请求

静态资源的请求 都会有 某些特点
static.u51.com
u51.com/static/a.jpg


大漠穷秋 Google 
Vue
React
Angular

异步：
1. 回调
2. Promis