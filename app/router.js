'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/api/login', controller.account.login)
  router.get('/api/logout', controller.account.logout)
}
