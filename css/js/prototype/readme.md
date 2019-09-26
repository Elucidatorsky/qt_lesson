
- prototype的三角恋
  构造函数(constructor)  构造函数的原型对象 {} 实例
  Person.prototype = {}
  Person.prototype.getName 
  es6 class 只是语法糖 
  Person 构造函数 都会有prototype属性  原型对象
  实例会通过 protototype 对象拿到所有的方法
  person.getName();

  Person.prototype.constryctor = Person();