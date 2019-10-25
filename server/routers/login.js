import Router from 'koa-router'
import { Signin } from '../controllers/login' 
const route = new Router()

route.post('/api/login', Signin)

export {
  route as Login
}