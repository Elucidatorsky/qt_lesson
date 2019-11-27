// const add: (a: number, b: number) => number = (a: number, b: number) => a + b

// const add = (a: number, b?: number) => a + (b ? b : 0)

// 剩余参数 js中：args typescript：rest
// const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => a + b)

function assigned(a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a
    } else if (c === undefined && d === undefined) {
        c = a
        d = b
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    }
}

// 泛型 定义函数体
// function returnItem(para:number): number {
    // return para
// }

// function returnItem<T>(para: T): T {
//     return para
// }

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
    console.log((arg as Array<any>).length);   
    return arg
}

// 泛型接口
interface ReturnItemFn<T> {
    (para: T): T
}

const returnItem: ReturnItemFn<number> = para => para

// 泛型类
// class Stack<T> {
//     private arr: T[] = []
//     public push(item: T) {
//         this.arr.push(item)
//     }

//     public pop(){
//         this.arr.pop()
//     }
// }


// 泛型约束
type Params = number | string
class Stack<T extends Params> {
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }

    public pop(){
        this.arr.pop()
    }
}
const stack1 = new Stack<string>()
// const stack2 = new Stack<boolean>()

// 使用多重类型进行泛型约束
interface FirstInterface {
    doSomthing(): number
}
interface SecondInterface {
    doSomethingElse(): string
}
// class Demo<T extends FirstInterface,T extends SecondInterface> {
//     private test: T
//     useT() {
//         this.test.doSomthing()
//         this.test.doSomthingElse()
//     }
// }
interface ChildInterface extends FirstInterface,SecondInterface {

}
class Demo<T extends ChildInterface>{
    private test: T
    useT() {
        this.test.doSomthing()
        this.test.doSomethingElse()
    }
}

// new 
function factory<T>(type: {new(): T}): T { // 允许我们泛型变量T是构造函数
    return new type()
}