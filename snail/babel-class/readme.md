-   instance of 只能判断复杂数据类型
-   typeof 只能判断简单数据类型

1. 枚举是指对象当中的属性是否可以遍历出来
Object.key()方法会返回有一个给定对象的自身可枚举属性生成的数组，
跟for...in的一个区别是for...in返回的是单个的字符串类型

2. 类的内部所定义的方法都是不可枚举的