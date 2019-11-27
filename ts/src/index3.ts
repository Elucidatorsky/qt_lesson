// 类型断言 无法判断 使用类型断言去解决
// const person = {} // 不能推断person是object
// person.name = 'Elucidator'
// person.age = 20

interface Person{
    name: string
    age: number
}
// const person = {} as Person
// const person: Person = {
//     name: 'Elucidator',
//     age: 20
// }


// 双重断言
const person = 'abc' as any as Person
person.name = 'Elucidator'
person.age = 20

// 类型守卫
class Person {
    name = 'wn'
    age = 18
}

// class Animal {
//     name = 'petty'
//     color = 'pink'
// }

// function getSomething(arg: Person | Animal) {
//     if (arg instanceof Animal) {
//         console.log(arg.color);
//         console.log(arg.age);
//     }
//     if (arg instanceof Person) {
//         console.log(arg.age);
//         console.log(arg.color);
//     }
// }

//  in
class Animal {
    name = 'petty'
    color = 'pink'
}

function getSomething(arg: Person | Animal) {
    if ('age' in arg) {
        console.log(arg.color);
        console.log(arg.age);
    }
    if ('color' in arg) {
        console.log(arg.age);
        console.log(arg.color);
    }
}

// 字面量类型守卫
type Foo = {
    kind: 'foo' // 字面量
    foo: number
}
type Bar = {
    kind: 'bar'
    bar: number
}
function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo);
        console.log(arg.bar);
    } else {
        console.log(arg.foo);
        console.log(arg.bar);
    }
}