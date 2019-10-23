import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import router from './routers/index.js'

const app = new Koa()
const PORT = 3000

app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)