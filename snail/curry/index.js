function add(a, b) {
    return a + b
}

// add(1, 2)


// function curry(fn) {
//     var args = [].slice.call(arguments, 1) // 为了将arguments放到数组中去 [arguments]
//     return function () {
//         var newArgs = args.concat([].slice.call(arguments))
//         console.log(newArgs);
        
//         return fn.apply(this, newArgs)
//     }
// }

// var addCurry = curry(add)
// console.log(addCurry(1, 2));

// addCurry(1)(2)

function subcurry(fn) { // 返回当前执行结果
    return function () { // 返回一个func
        return fn()
    }
}

function curry(fn, length) {
    length = length || 4  //  length没传即不存在即4
    return function () {
        if (length > 1) { // 表示没传完
            console.log(sub_curry(fn)); // 第一次 curry(func{}, 'a')
            
            return curry(sub_curry(fn), --length) // fn外侧fn  第一遍只接受到了一个参数 sub() => 'a'
        } else {
            return fn()
        }
    }
}
var fn = curry(function (a, b ,c) { 
    return [a, b, c]
})
// ↓
// var fn = curry(function (a, b ,c) { 
    // return [a, b, c]
// }, ('a')('b')('c'))
console.log(fn('a')('b')('c'));

// ======================

function sub_curry(fn) { // 改变传参方式 接受到的是函数
    var args = [].slice.call(arguments, 1) // 拿到参数，去掉第一项(第一项是function)
    console.log('sub');
    console.log('fn',fn);
    console.log('args',args);
    console.log('arguments',arguments);
    return function () {
        console.log('sub re');
        console.log('fn',fn);
        console.log('args',args);
        return fn.apply(this, args.concat([].slice.call(arguments)))
    }
}

function curry(fn, length) {
    console.log('curry');
    console.log('fn',fn);
    length = length || fn.length
    var slice = Array.prototype.slice
    console.log('slice',slice);
    return function () {
        if (arguments.length < length) { // 表示没有传完参数
            var combined = [fn].concat(slice.call(arguments))  // => curry(add, 1, 2)
            console.log('combined',combined);
            console.log('arguments',arguments);
            console.log('length',length);
            
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments) // 考虑到作用域不要被修改
        }
    }
}

var fn = curry(function (a, b ,c) {
    return [a, b, c]
})
// var fn = curry(function (a, b ,c) {
//     return [a, b, c]
// }, 'a') 报错 数组不是函数
console.log(fn('a', 'b', 'c'));
console.log();

console.log(fn('a', 'b')('c'));
console.log();

console.log(fn('a')('b')('c'));


// function curry(fn, args) {
//     length = fn.length;
//     args = args || [];
//     return function() {
//         var _args = args.slice(0),
//             arg, i;
//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             _args.push(arg);
//         }
//         if (_args.length < length) {
//             return curry.call(this, fn, _args);
//         }
//         else {
//             return fn.apply(this, _args);
//         }
//     }
// }




// function curry(fn, args, holes) {
//     length = fn.length;
//     args = args || [];
//     holes = holes || [];
//     return function() {
//         var _args = args.slice(0),
//             _holes = holes.slice(0),
//             argsLen = args.length,
//             holesLen = holes.length,
//             arg, i, index = 0;
//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
//             if (arg === _ && holesLen) {
//                 index++
//                 if (index > holesLen) {
//                     _args.push(arg);
//                     _holes.push(argsLen - 1 + index - holesLen)
//                 }
//             }
//             // 处理类似 fn(1)(_) 这种情况
//             else if (arg === _) {
//                 _args.push(arg);
//                 _holes.push(argsLen + i);
//             }
//             // 处理类似 fn(_, 2)(1) 这种情况
//             else if (holesLen) {
//                 // fn(_, 2)(_, 3)
//                 if (index >= holesLen) {
//                     _args.push(arg);
//                 }
//                 // fn(_, 2)(1) 用参数 1 替换占位符
//                 else {
//                     _args.splice(_holes[index], 1, arg);
//                     _holes.splice(index, 1)
//                 }
//             }
//             else {
//                 _args.push(arg);
//             }
//         }
//         if (_holes.length || _args.length < length) {
//             return curry.call(this, fn, _args, _holes);
//         }
//         else {
//             return fn.apply(this, _args);
//         }
//     }
// }
// var _ = {};
// var fn = curry(function(a, b, c, d, e) {
//     console.log([a, b, c, d, e]);
// });
