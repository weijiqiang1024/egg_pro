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
		let vPwd = false;
		//admin 密码没加密
		if (user.username == 'admin') {
			vPwd = payload.password == user.password;
		} else {
			vPwd = await ctx.compare(payload.password, user.password);
		}

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

	/**
	 * 
	 * @param {*} payload 
	 */
	async find(payload) {
		const { pageIndex, pageSize } = payload;
		let res = [];
		let count = 0;
		let skip = (Number(pageIndex) - 1) * Number(pageSize || 10);
		res = await this.ctx.model.User.find({}).skip(skip).limit(Number(pageSize)).exec();
		count = await this.ctx.model.User.count({}).exec();

		let data = res.map((e, i) => {
			const jsonObj = Object.assign({}, e._doc);
			jsonObj.key = i;
			return jsonObj;
		});

		return { count: count, list: data, pageIndex: Number(pageIndex), pageSize: Number(pageSize) };
	}

	async update(_id, payload) {
		const { ctx } = this;
		const user = await this.ctx.model.User.findById(_id);
		if (!user) {
			ctx.throw(404, 'user not found');
		}
		return ctx.model.User.findByIdAndUpdate(_id, payload);
	}

	async destroy(_id) {
		const { ctx, service } = this;
		const user = await ctx.model.User.findById(_id);
		if (!user) {
		  ctx.throw(404, 'user not found');
		}
		return ctx.model.User.findByIdAndRemove(_id);
	  }
}

module.exports = UserService;
