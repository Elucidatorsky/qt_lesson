// typeOf exports ?

console.log(exports, module.exports, exports === module.exports)
var counter = 3;
// typeOf exports ==='Object'
var obj = {
    name: 'David'
}
function changeValue() {
    counter ++;
    obj.name = 'Tom'
}
// 抛出
module.exports = {
    counter,
    obj,
    changeValue
}
// module.exports.counter = counter
// exports.counter = counter;
// exports = module.exports = { // 没必要
//     counter
// }