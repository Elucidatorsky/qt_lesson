// var t // 不产生全局污染 闭包
// function foo() { // 第二次调用时不返回 new Date
//     if (t) { // 每次调用都要判断
//         return t
//     }
//     t = new Date()
//     return t
// }

// var foo = (function () {
//     var t
//     return function () {
//         if (t) {
//             return t
//         }
//         t = new Date()
//         return t
//     }
// })()

// function foo() {
//     if (foo.t) {
//         return foo.t
//     }
//     foo.t = new Date()
//     return foo.t
// }

// var foo = function () {
//     var t = new Date()
//     foo = function () {
//         return t
//     }
//     return foo()
// }

function addEvent(type, el, fn) {
    if (window.addEventListener){
        el.addEventListener(type, fn, false) // 第三个参数 阻止冒泡 type 事件
    } else if (window.attachEvent) { // ie的事件监听
        el.attachEvent('on' + type, fn)
    }
}

function addEvent(type, el, fn) {
    if (window.addEventListener) {
        addEvent = function (type, el, fn) {
            el.addEventListener(type, fl, false)
        }
    } else if (window.attachEvent) {
        addEvent = function (type, el, fn) {
            el.attachEvent('on' + type, fn)
        }
    }
}