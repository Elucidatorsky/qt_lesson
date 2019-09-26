// class Person {
//     constructor () {
//         this.state = {
//             count: 0
//         }
//     }
// }

// 静态方法
class Person{ // 类一定要被new 出来才能调用
    sayHello() {
        return 'hello'
    }
}
var wn = new Person()
console.log(wn.sayHello())
// function Person() {
    // Person.sayHello = function（） {

    // }
// }

// 静态属性
class Person {}
Person.name = "wn"

class Person{
    static name = 'wn'
}
// ES5
function Person() {
    
}
Person.name = 'wn'
// babel 转化              
// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var Person = function Person(name) {
//   _classCallCheck(this, Person);

//   this.name = name;
// };