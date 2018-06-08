'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log(require('./router/login'));
  require('./router/login')(app);
  // require('./router/api')(app);
};
