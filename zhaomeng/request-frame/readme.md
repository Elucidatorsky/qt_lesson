## 帧
刷新率 60Hz
60次 / 1000ms 16.666ms / 一次

## 
1. 主进程
2. 插件
3. CPU
4. 渲染

## 渲染
1. js
2. http
3. 定时器
4. 事件
5. 页面绘制布局

js 和 页面绘制布局时互斥的
js 可以改变 DOM

## event loop 事件轮循
MacroTask(宏任务)：同步代码 setTimeOut setinterval
MicroTask(微任务)：Promise.then.nextTick

宏任务 -> 做任务 -> 渲染  宏任务 -> 微任务 -> 渲染 宏任务 -> 渲染 宏任务 ->