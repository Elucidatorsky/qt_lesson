## 创建对象的几种方法
1. 对象字面量
```js
var obj ={
    name:''
}
```

2. new Object();
3. 构造函数
通过new 调用的时候
公隐式创建一个对象，把属性放到该对象，返回
如果构造函数没有返回值，或返回的不是一个对象，那么：
会隐式创建一个对象，把属性放到该对象
```js
var t = new OBject();
t.x=x;
return typeof Constructor() === 'Object' ? Constructor() : t;
```