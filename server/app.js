import Koa from 'koa'
import { Login, Regist } from './routers'

const app = new Koa()
const PORT = 3000

app.use(Login.routes()).use(Login.allowedMethods())
app.use(Regist.routes()).use(Regist.allowedMethods())

app.listen(PORT)