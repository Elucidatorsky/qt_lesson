const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
// 读取文件夹
const readDir = util.promisify(fs.readdir);

fs.readdir('./static/', (err, files) => {
    console.log('files', files)
})

readDir('./static/').then(res => {
    console.log(res);
})
// // 方式一
// readFile('./index.js', 'utf8').then(data => {
//     console.log('data-', data);
// })
// // 方式二
// fs.readFile('./index.js', 'utf8', (err, data) => {
//     console.log(data);
// })
// fs.readFile().then();
