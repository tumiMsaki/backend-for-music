import { Context } from 'koa'

const loginServer = async (ctx = Context) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = {
    code: 200,
    msg: ctx.request.body
  }
}

export {
  loginServer
}