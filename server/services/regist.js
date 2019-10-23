import { Context } from 'koa'

const registServer = async (ctx = Context) => {
  ctx.body = {
    code: 200,
    msg: 'regist'
  }
}

export {
  registServer
}