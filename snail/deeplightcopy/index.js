// let a = 'wn' // 是个基本类型 深拷贝
// let b = a
// console.log(b);

// a = '蜗牛'
// console.log(a);
// console.log(b);

// let a = { // 是个引用类型 浅拷贝
//     name: 'wn',
//     book: {
//         title: "You dont know js",
//         price: "45"
//     }
// }
// let b = a // 1
// console.log(b);
// let b = Object.assign({}, a) // 2  如果对象当中的基础数据类型执行深拷贝 引用类型是浅拷贝
// // console.log(b);
// let b = {...a} // 3  同2
// console.log(b);

// a.name = '班长'
// a.book.price = "55"
// console.log(a);
// console.log(b);

let a = [0, '1', [2, 3]]
let b = a.slice(1) // 同上
// b ['1', [2, 3]]
a[1] = '22'
a[2][0] = 4
console.log(a);
console.log(b);
