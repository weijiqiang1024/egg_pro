const Service = require('egg').Service;

class UserService extends Service {
	/**
   *login
   *
   * @param {*} payload
   * @returns
   * @memberof UserService
   */
	async loginAcc(payload) {
		const { ctx, service } = this;
		const user = await this.ctx.model.User.findOne({ username: payload.username });
		if (!user) ctx.throw(400, 'user not find');
		//验证pwd
		// let vPwd = payload.password == user.password;
		let vPwd = await ctx.compare(payload.password,user.password);
		if (!vPwd) ctx.throw(400, 'password error');
		// 生成Token令牌
		let token = await service.actionToken.apply(user._id);
		return { token: token, userData: [ { username: 'admin' } ] };
	}

	/**
   *creat user
   *
   * @param {*} payload
   * @memberof UserService
   */
	async create(payload) {
		const { ctx } = this;
		if (payload.password) {
			payload.password = await this.ctx.genHash(payload.password);
    }
    return ctx.model.User.create(payload);
	}
}

module.exports = UserService;
