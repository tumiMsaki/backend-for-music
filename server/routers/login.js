import Router from 'koa-router'
import { loginServer } from '../services/login' 
const route = new Router()

route.post('/api/login', loginServer)

export {
  route as Login
}