const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
// js 正则
function isBalanced(exp) {
    // /g之后，表明可以进行全局匹配
    const reg = /{}/g;
    let len;
    do {
        len = exp.length;
        console.log(len);
        console.log(exp.length);
        exp = exp.replace(reg, '');
    } while(len != exp.length)  // 不为空 一直做
    return exp.length == 0;
}
console.log(isBalanced(expressionFalse));