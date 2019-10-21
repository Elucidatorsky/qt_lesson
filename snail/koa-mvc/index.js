const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser')
const app = new Koa();
const router = require('./router/index.js')
//ctx.request.body
app.use(KoaBodyParser())
// 跨域 1. option 验检请求   成功 -> 2. post /login 正式请求
app.use(async (ctx, next) => {
  // http://localhost:8080/cors.html  404
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type');
  // 允许 是否发送 cookie ...凭证
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.body = '12345678';  // ?
  await next();
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3003, () => {
  console.log('server is running http://localhost:3003');
})