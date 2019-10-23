import Router from 'koa-router'
import { registServer } from '../services/regist' 
const route = new Router()

route.get('/api/regist', registServer)

export {
  route as Regist
}