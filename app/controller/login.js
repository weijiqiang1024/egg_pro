'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
 /**
  *登录方法
  *
  * @memberof LoginController
  */
 async post() {
		console.log(this.ctx.request.body, 666666);

		const { ctx, service } = this;
    //请求信息组装
    const payload = ctx.request.body || {};
    //调用service,业务处理
    const res = await service.user.loginAcc(payload);
    //设置相应内容及相应状态
    ctx.helper.success({ctx,res});
	}
}

module.exports = LoginController;
