# 预编译 四部曲 发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
3. 将实参值和形参值通用
4. 在函数体里找到函数声明，将函数声明作为AO对象属性名，值赋予函数体

AO {
    a: undefined,
    b: undefined
}


// var b = function () {} 是函数表达式
AO{
    a: 1，
    b: undefined,
    d: 
}

AO{
    a: function () {}，
    b: undefined,
    d: function () {}
}

AO{
    a: function () {} => 123 
    b: undefined => function() {}
    d: function () {}
}