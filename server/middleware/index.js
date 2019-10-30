import router from '../routers/index'
import bodyparser from 'koa-bodyparser'
import checkLogin from './check'

module.exports = app => {
  app.use(bodyparser())
  app.use(checkLogin())
  app.use(router.routes())
}