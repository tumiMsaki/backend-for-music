import Router from 'koa-router'
import { Login } from './login.js'
import { Regist } from './regist.js'
import { Music } from './music.js'

const router = new Router()

router.use(Login.routes(), Login.allowedMethods())
router.use(Regist.routes(), Regist.allowedMethods())
router.use(Music.routes(), Music.allowedMethods())


module.exports = router