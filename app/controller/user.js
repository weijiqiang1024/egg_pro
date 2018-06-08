'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const {ctx} = this;
    this.ctx.body ={name:`hi, ${ctx.params.id}`} ;
  }
}

module.exports = UserController;