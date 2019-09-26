// 函数自己调用自己
const w = new Map(); // 数据结构 Hash表

function f(n) {
    // 归 退出条件
    if(n == 1)  return 1;
    if(n == 2)  return 2;
    if(w.has(n)){
        return w.get(n);
    }
    var ret = f(n-1) + f(n-2);
    w.set(n, ret);
    return ret; // 递
}
// 内存溢出 数额大
// - 重复计算 7 = 6 + 5; 6 = 5 + 4; 5 2次
//     计算过的缓存一下 {key:val} Map() get set has  HashMap
//     每次调用函数 入栈 不优化，内存溢出
console.log(f(7));
// /**
//  * leetcode 70
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function(n) {
//     let stairs = Array.from({length:n},v=>-1)
//     stairs[0] = 1
//     stairs[1] = 2
//     for(let i = 2; i < n; i++){
//         stairs[i] = stairs[i-1] + stairs[i-2]
//     }
//     return stairs[n-1]
// };