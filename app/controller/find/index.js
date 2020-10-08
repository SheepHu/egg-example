'use strict';

const Controller = require('egg').Controller;

class FindController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
    <h3>发现页</h3>`;
  }
}

module.exports = FindController;
