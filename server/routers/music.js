import Router from 'koa-router'
import { musicServer } from '../controllers/music' 
const route = new Router()

route.post('/api/music', musicServer)

export {
  route as Music
}