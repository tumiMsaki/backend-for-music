import Router from 'koa-router'
import { loginServer } from '../controllers/login' 
const route = new Router()

route.post('/api/login', loginServer)

export {
  route as Login
}