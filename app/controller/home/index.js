'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(ctx.header['user-agent']);
    ctx.body = `
    <div style="width: 100px; height: 100px; background: pink">你好 egg</div>`;
  }
}

module.exports = HomeController;
