'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async list() {
    // const dataList = {
    //   list: [
    //     { id: 1, title: '新闻列表1' },
    //     { id: 2, title: '新闻列表2' },
    //     { id: 3, title: '新闻列表3' },
    //   ],
    // };
    const { ctx } = this;
    const page = ctx.query.page || 1;
    // console.log(ctx.service.news.list);
    const { maintainers: list } = await ctx.service.news.index.list(page);
    // console.log(newsList);
    await ctx.render('news/list.tpl', { list });
  }
}

module.exports = NewController;
