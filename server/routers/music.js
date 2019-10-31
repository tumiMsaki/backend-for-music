import Router from 'koa-router'
import * as musciApi from '../controllers/music' 
const route = new Router()

route.post('/api/music/searchMusic', musciApi.searchMusic)
route.post('/api/music/musicCollection', musciApi.musicCollection)
route.post('/api/music/addMusic', musciApi.addMusic)
route.post('/api/music/searchAuthor', musciApi.searchAuthor)
route.post('/api/music/searchCollectionMusicList', musciApi.searchCollectionMusicList)
route.post('/api/music/searchMusicById', musciApi.searchMusicById)
route.post('/api/music/cancelMusicCollection', musciApi.cancelMusicCollection)

export {
  route as Music
}