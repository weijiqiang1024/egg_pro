const Service = require('egg').Service;

class UserService extends Service {
	//loginAccess
	//////////////////////////////////////////////////////////////////
	async loginAcc(payload) {
		const { ctx, service } = this;
		const user = await this.ctx.model.User.findOne({ username: payload.username });
		if (!user) ctx.throw(404, 'user not find');
		//验证pwd
		let vPwd = payload.password == user.password;
		if (!vPwd) ctx.throw(404, 'password error');
		// 生成Token令牌
		let token = await service.actionToken.apply(user._id);
		return { token: token, userData: [ { username: 'admin' } ] };
	}
}

module.exports = UserService;
