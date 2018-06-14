'use strict';

// had enabled by egg
// exports.static = true;

//模板
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
  };

  //验证
exports.validate = {
  enable: true,
  package: 'egg-validate',
}

  // {app_root}/config/plugin.js
  exports.routerPlus = {
    enable: true,
    package: 'egg-router-plus',
  };
  //允许跨域
  exports.cors = {
    enable: true,
    package: 'egg-cors',
  }
  //mysql
  exports.mysql = {
    enable: true,
    package: 'egg-mysql',
  };
  //mongodb
  exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
  }

  exports.jwt = {
    enable: true,
    package: 'egg-jwt',
  }
  
