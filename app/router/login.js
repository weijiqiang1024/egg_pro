'use strict'

module.exports = app => {
    app.router.post('/login',app.controller.login.post);
}