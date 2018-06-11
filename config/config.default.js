'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528092234424_586';

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
    '.tpl': 'nunjucks',
  },
  }
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }
  //安全配置
  config.security = {
    domainWhiteList:['http://127.0.0.1'] ,
    csrf: {
      enable: false,
    },
  };
  //跨域
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  config.middleware = [];

  return config;
};
