const userModel = require('../model/user-info.js')
const register = async (ctx) => {
  console.log('注册');
  const user = ctx.query;
  console.log(user)
  // 插入数据库
  let insertRes = await userModel.insertData(user);
  console.log('插入数据库的结果', insertRes)
  ctx.body = insertRes;
}
module.exports = register;