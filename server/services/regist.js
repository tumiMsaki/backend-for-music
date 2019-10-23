import { Context } from 'koa'

const registServer = async (ctx = Context) => {
  ctx.body = ctx.url
}

export {
  registServer
}