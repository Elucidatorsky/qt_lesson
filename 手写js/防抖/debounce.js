// 防抖和节流的区别
// 防抖 无输入几秒后发送请求
// 节流 限制多少秒发一次请求
const debounce = (fn, delay) => {
    let timer = null
    return (...args) => { // 不知道有没有参数放...args
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, ...args)
        }, delay)
    }
}

debounce(test)

let test = function() {
    console.log(123);
}