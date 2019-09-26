// function Singleton() {
//     let instance = null;
//     return instance;
// }
const Singleton = (function() {
    // 闭包 closure
    let instance = null;//闭包区域
    console.log('------------闭包区域');
    return function() {
        //constructor
        console.log('------------new');
        console.log('return func()');
        console.log('instance', instance);
        if (instance) {
            console.log('if instance', instance);
            return instance
        }
        console.log('return: after if', this);
        return instance = this; // 设置一个instance去指向new出来的空间
    }
})();//立即执行函数 函数后加括号
// console.log(Singleton, typeof Singleton);
// 实例 return  单例模式 只实例化一个
const a = new Singleton();
console.log('========================');
const b = new Singleton();
console.log(a == b);//false