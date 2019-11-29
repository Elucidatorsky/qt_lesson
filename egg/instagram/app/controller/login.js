const Controller = require('egg').Controller;

class LoginController extends Controller {
    async register() {
        const { ctx } = this
        const { password,username,email} = ctx.request.body
        console.log(password,username,email)
        ctx.body={statusCode:200, mes:'用户名或密码没有'}
    };
    async loginIn(){
        
    }
}
module.exports = LoginController
