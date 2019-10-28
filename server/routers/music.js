import Router from 'koa-router'
import * as musciApi from '../controllers/music' 
const route = new Router()

route.post('/api/music/searchMusic', musciApi.searchMusic)
route.post('/api/music/addFavorites', musciApi.addFavorites)
route.post('/api/music/musicCollection', musciApi.musicCollection)
route.post('/api/music/addMusic', musciApi.addMusic)

export {
  route as Music
}