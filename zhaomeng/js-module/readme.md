## AMD
异步模块化加载的一个方案
代表： Require.js
define 定义
require 引入


## CMD
公共模块加载
代表作 Sea.js 玉伯

共同：
都能异步加载
区别
1. AMD 会 提升所有的 require 只要依赖了模块，就会加载
2. CMD 就会 完全按照代码顺序加载

## UMD
AMD + Common.js
通用模块加载
```js
有amd用amd，
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () {}))

(function() {})()
// node 
module.exports.a = a;
// AMD 以前的

运营活动页面 jq