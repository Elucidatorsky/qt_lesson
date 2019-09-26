// const box = {a: 10, b: {c: 100}};
// Object.freeze(box);
// box.a = 100;
// box.b.c = 1000;
// // 可变是万恶之源
// const box1 = box;
// box1.a =1000;
// console.log(box);
// // box 是什么东西？
// const arr = [0, 1];
// Object.freeze(arr);
// arr[0] = 123;
// console.log(arr);


// // 2 解构
// const { name: myName } = { name: 'lihua'};
// console.log(name);


// 3
// const add = () => {
//     const cache = {};
//     return num => {
//         if (num in cache) {
//             return `from cache ${num}`
//         } else {
//             const r = num + 10;
//             cache[num] = r;
//             return `calcul ${r}`;
//         }
//     }
// }
// const addFunc = add(); //addFunc 是一个return出来的方法 
// console.log(addFunc(10)); //calcul 返回的是一个函数
// console.log(addFunc(10)); // from cache
// console.log(addFunc(2 * 5)); // from cache

// 4
// const arr4 = ['lihua', 'lilei'];
// // 枚举一个对象里的属性 下标
// // {'0': 'lihua', '1': 'lilei'}
// // 不能用for in 遍历数组对象
// for (let item1 in arr4) {
//     console.log(item1);
// }
// // 可遍历 数组 Map Set String  (可迭代对象)
// // for of 可以用来遍历可迭代对象
// for (let item2 of arr4) {
//     console.log(item2);
// }

// 5
// var status = 'global';
// var obj = {
//     status: 'obj',
//     getStatus: function () {
//         return this.status;
//     }
// }
// console.log(obj.getStatus());
// var fun = obj.getStatus;
// console.log(fun());

// 6
// function Foo() {}
// es6定义类/方法
// class Foo {
// 
// }
// 只是一个语法题
// console.log(typeof Foo);

// 7
// Symbol 普通的函数 每次调用都产生唯一的值 可以作为对象的属性
// 给对象添加属性不会覆盖之前的属性
// string number Bool null undefined Symbol 简单数据类型
// Object 复杂数据类型
let a = Symbol('a');
var obj = {
    [a]: 'a value'
}
console.log(Object.keys(obj));
// Object.keys 返回一个对象上面 可以枚举的属性
console.log(a in obj); // 可以检测到
console.log(Object.getOwnPropertySymbols(obj))