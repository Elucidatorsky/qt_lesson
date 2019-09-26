let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
    [Symbol('d')]: 'ddd'
}

Object.defineProperty(obj, 'e', {
    value: 'eee',
    enumerable: true
    // enumerable: false 默认值
})
console.log(Object.keys(obj))
// for(let key in obj){
//     console.log(key);
// } 