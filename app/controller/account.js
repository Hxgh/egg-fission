'use strict'

const Controller = require('egg').Controller

class AccountController extends Controller {
  async login(aaa) {
    const userInfo = {
      name: '至尊宝',
      id: '9527'
    }
    console.log(aaa)
    // 实际开发中, 这个地方的数据应该从数据库中查询出来
    this.ctx.body = { code: 200, data: userInfo, msg: 'ok' }
  }
  async logout() {
    // 实际开发中, 这个地方的数据应该从数据库中查询出来
    this.ctx.body = { code: 200, data: 'logout', msg: 'ok' }
  }
}

module.exports = AccountController
