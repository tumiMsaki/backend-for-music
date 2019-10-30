import Koa from 'koa'
import middleware from '../server/middleware/index'

const app = new Koa()
const PORT = 3000

middleware(app)

app.listen(PORT)