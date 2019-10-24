import Router from 'koa-router'
import { Signup } from '../controllers/regist' 
const route = new Router()

route.post('/api/regist', Signup)

export {
  route as Regist
}