import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import router from './routers/index.js'

const app = new Koa()

app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())
const PORT = 3000
app.listen(PORT)