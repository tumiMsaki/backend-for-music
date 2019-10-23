const Koa = require('koa')
const app = new Koa()
const server = require('../app')

const POST = 3000

app.use(server)

app.listen(POST)
