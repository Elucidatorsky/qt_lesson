var { counter, obj, changeValue } = require('./node-common.js');

console.log(counter, obj);
changeValue();
console.log(counter, obj);

// 复制
var a = 1; var b = a; a = 2; // aa 受影响
var aa = {}; var bb =aa; aa.name = 'bbname'; // bb 受影响
// commonJS require 的时候 类比 js
// 基本数据类型 复杂数据类型 的复制
// 它也就是 复制了一份导出来的东西
// 基本数据类型 引进来是啥就是啥  复杂数据类型 不一定