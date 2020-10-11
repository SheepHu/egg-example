'use strict';

module.exports = (options, app) => {
  return async function roboMiddleware(ctx, next) {
    const source = ctx.get('use-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
};
