import Router from 'koa-router'
import * as musciApi from '../controllers/music' 
const route = new Router()

route.post('/api/music', musciApi.searchMusic)

export {
  route as Music
}