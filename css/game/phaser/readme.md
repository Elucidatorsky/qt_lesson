- callback
//定义主函数，回调函数作为参数
function A(callback) {
    callback();  
    console.log('我是主函数');      
}
//定义回调函数
function B(){
    setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作  
}
//调用主函数，将函数B传进去
A(B);
//输出结果
我是主函数
我是回调函数
    回头一笑 addEventlistener(event-type,callback);
    定义时，不执行，注册了
    事件发生时，将注册的回调函数拿回来执行，拿回来调用一下 异步

- fs 文件模块
    异步是需要花时间，注册行为，callback
    err
- 操作系统
    addEventListener 事件监听 I/O操作
    Input/Output CPU(运算和指令集)内存，外部存储设备，典型的慢操作
    fs.readFile(path,'utf-8',callback)