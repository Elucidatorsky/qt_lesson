// stack[stack.length - 1] !== [...map.entries()].filter(el => el[1] === node).pop().shift() 
const expression = '{{}[{}]}{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6 新的数据结构 hashmap 映射
  const map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
//   console.log([...map.values()]);
  // for (let [key, val] of map) {
  //   console.log(key, val);
  // }
  let stack = [];
  console.log(str.length); // 8
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    // console.log('node',str[i]); // node
    // console.log('map.has(node)',map.has(node)); // true
    // 入栈
    // 出栈
    if (map.has(node)) {
      stack.push(node);
      // ... 展开运算符     '}' ']' ')'
    } else if ([...map.values()].includes(node)) { ///????无意义
      // 右边的， values之中的一个,  跟栈顶的元素匹配
      // key   value 反找key
      let key = stack[stack.length - 1];
      console.log('stack',stack);
      console.log('key',key);
      if (map.get(key) != node) {
        return false;
      }
      stack.splice(stack.length-1, 1); //pop
      console.log('splice: stack', stack);
    } 
  }
   return stack.length === 0
  // map.set
}
console.log(isBalanced(expression));