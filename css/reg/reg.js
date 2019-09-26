// // 一个字符
// let phoneReg = /1[0-9]{10}/;
// console.log(phoneReg.test("13907930350"));
// 一个字符
// let phoneReg = /1[3-9][0-9]{9}/;
// console.log(phoneReg.test("13907930350"));
// let phoneRrg = /1[3-9][0-9]{9}/;
// let str ="我的号码是180079300300，收下吧"
// console.log(str.match(phoneRrg)[0]);
// + 一次或者多次,向左修饰
let emailReg = /^[0-9a-zA-Z\-\_]+@[0-9a-zA-Z]\.[0-9a-zA-Z]+$/;
console.log(emailReg.test(""));