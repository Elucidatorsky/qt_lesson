const KoaRouter = require('koa-router');
const registerController = require('../controller/register.js')
const router = new KoaRouter();
router.get('/login', async (ctx) => {
  // 
});
router.get('/register', registerController);
module.exports = router;