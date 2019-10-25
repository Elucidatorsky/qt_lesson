const w = new Map(); // 数据结构 Hash表
var zimu = []
function f(n) {
    // 归 退出条件
    if(n == 1)  return 1;
    if(n == 2)  return 2;
    if(w.has(n)){
        return w.get(n);
    }
    var ret = n * f(n-1) ;
    w.set(n, ret);
    return ret; // 递
}

f(26);
console.log(w);

