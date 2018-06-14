const Controller = require('egg').Controller
/**
 *
 *
 * @class UserController
 * @extends {Controller}
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx)

    this.UserCreateTransfer = {
      mobile: {type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/},
      password: {type: 'password', required: true, allowEmpty: false, min: 6},
      realName: {type: 'string', required: true, allowEmpty: false, format: /^[\u2E80-\u9FFF]{2,6}$/}
    }

    this.UserUpdateTransfer = {
      mobile: { type: 'string', required: true, allowEmpty: false },
      realName: {type: 'string', required: true, allowEmpty: false, format: /^[\u2E80-\u9FFF]{2,6}$/}
    }
  }

  /**
   *create user
   *
   * @memberof UserController
   */
  async create(){
    const {ctx,service} = this;
    //获取参数
    const payload = ctx.request.body || {};
    //调用service业务处理
    const res = await service.user.create(payload);

    ctx.helper.success({ctx,res});
  }

   
}


module.exports = UserController