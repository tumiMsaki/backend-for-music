import { Context } from 'koa'
import * as userModel from '../../init/util/mysql' 

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