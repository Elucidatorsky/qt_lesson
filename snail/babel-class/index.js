// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello () {
//         return 'Hello, I\'m '+this.name
//     }
// }

// var wn = new.Person('wn')
// console.log(wn.sayHello())

// ES5
function Proson(name){
    this.name = name 
}
 Person.prototype.sayHello = function () {
     return 'Hello, I am ' + this.name
 }
 console.log(Objct.keys(Person))