'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index.index);
  router.get('/find', controller.find.index.index);
  router.get('/news', controller.news.index.list);
};
