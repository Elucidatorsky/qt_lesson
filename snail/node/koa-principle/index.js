// 原生js
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.end('hello world')
// })
// server.listen(3000, () => {
//     console.log('服务器3000');
// })

// koa
// const Koa = require('koa')
// const app = new Koa()
// app.use((ctx, next) => {
//     ctx.body = 'hello world'
// })
// app.listen(3000)

let Koa = require('./lib/application')
let app = new Koa()

app.use((req, res) => {
    res.end('app.use hello world')
})

app.listen(3000)