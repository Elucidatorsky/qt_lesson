// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//     console.log(req.url);
//     fs.readFile('./index1.html', 'binary', (err, file) => {
//         res.write(file, 'binary'),
//         res.end();
//     });
// }).listen(9090, () => {
//     console.log('server is running 9090');
// })
const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
    console.log(req.url);
    const reqUrl = req.url;
    // ^ /static/
    if (/^\/static\//.test(reqUrl)) {
        staticServer(req, res);
        return false;
    }
    fs.readFile('./index1.html', 'binary', (err, file) => {
        // if (req.url === '/a.jpg') {
        //     fs.readFile('./a.jpg', 'binary', (err, file) => {
        //         res.write(file, 'binary'),
        //         res.end();
        //     });
        //     return false;
        // } 
        // if(req.url === './angel.jpg')
        res.write(file, 'binary'),
        res.end();
    });
}).listen(9090, () => {
    console.log('server is running 9090');
});
function staticServer(req, res) {
    const reqUrl = req.url;
    // /a.jpg  . ..格式查找文件查找才能找到,
    // /angel.jpg
    const filePath = path.join(__dirname, reqUrl);
    fs.exists(filePath, exists => {
        if(!exists){
            res.writeHead(404);
            res.end();
            return false;
        }
        fs.readFile(filePath, 'binary', (err, file) => {
            res.write(file, 'binary');
            res.end();
        })
    });
}