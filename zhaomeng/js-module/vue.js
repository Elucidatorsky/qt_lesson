(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
  }(this, function () {}))

  (function() {})() // 传了两个参
  // node
  module.exports.a = a;
  // AMD 以前的模块化的方案 代表RequireJS