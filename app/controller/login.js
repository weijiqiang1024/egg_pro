'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async post() {
      console.log(this.ctx.request.body,666666);
    // this.ctx.body = 'hi, egg';
  }
}

module.exports = LoginController;
