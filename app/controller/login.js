'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async post() {
      console.log(this.ctx.request.body,666666);
    // this.ctx.body = 'hi, egg';
    const {ctx} =this;
    ctx.body = { ret:1,userData:[{username:'admin'}] };
    ctx.status = 201;
  }
}

module.exports = LoginController;
