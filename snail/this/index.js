function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm "+ identify.call(this);
    console.log(greeting);
}
var me = {
    name: 'Lester'
}
var you = {
    name = 'zm'
}
console.log(identify.call(me));

// 谁调用this,作用域就指向谁
function identify(context){
return context.name.toUpperCase()
}