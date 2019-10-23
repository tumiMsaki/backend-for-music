import { Context } from 'koa'

const loginServer = async (ctx = Context) => {
  ctx.body = ctx
}

export {
  loginServer
}