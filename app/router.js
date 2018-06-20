'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log(66666);
  const { router,controller } = app;
  
  router.post('/api/login',controller.login.post);

  router.post('/api/sys_user/create',controller.user.create);
  router.post('/api/sys_user/find',controller.user.find);
  router.post('/api/sys_user/update',controller.user.update);
  // router.delete('/api/role', controller.role.removes)
  // router.resources('role', '/api/role', controller.role)
  // require('./router/login')(app);
  // require('./router/api')(app);
};
