'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log(66666);
  const { router,controller } = app;

  router.post('/login',controller.login.post);
  // require('./router/login')(app);
  // require('./router/api')(app);
};
