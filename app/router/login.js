'use strict'

module.exports = app => {
    const apiV1Router = app.router.namespace('/api/v1');
    apiV1Router.post('/login',app.controller.login.post);
}