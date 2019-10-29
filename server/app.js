import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import router from './routers/index.js'
import session from 'koa-session'
import config from '../server/middleware/session/config'

const app = new Koa()

app.keys = ['some secret hurr']

app.use(bodyparser())
app.use(session(config, app))
app.use(router.routes()).use(router.allowedMethods())
const PORT = 3000
app.listen(PORT)