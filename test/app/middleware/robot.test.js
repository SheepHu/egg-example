'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
      .get('/')
      .set('Use-Agent', 'Baiduspider')
      .expect(403);
  });
});
