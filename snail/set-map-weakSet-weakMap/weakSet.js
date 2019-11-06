// weakSet 对象允许你将弱引用对象存储在一个集合中 --- 若引用版本的Set
// var ws = new WeakSet()
// var a = { foo : 'bar'}
// ws.add(a)
// ws.delete(a)
// console.log(ws);
// WeakSet { foo : 'bar' }

// var test = {
//     name: 'test',
//     content: {
//         name: 'wh',
//         age: '18'
//     }
// }
// var ws = new WeakSet()
// ws.add(test.content)
// console.log(ws);
// ws.delete(test.content)
// console.log(ws);

// 防止内存泄漏 无法回收栈里的内容
const foos = new WeakSet()
class Foo {
    constructor() {
        foos.add(this)
    }
    method () {
        if(!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 值能在Foo的实例')
        }
    }
}
