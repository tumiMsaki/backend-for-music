import { redis } from '../../../init/util/redis'
module.exports = () => {
  return async (ctx, next) => {
    if (ctx.request.url === '/api/login' || ctx.request.url === '/api/regist') {
      return await next()
    }


    //
    if (!name) {
      return ctx.body = {
        err_code: 4,
        msg: '未登陆或登陆过期'
      }
    }

    const redisData = await redis.get(name);
    if (!redisData) {
      return ctx.body = {
        err_code: 1,
        msg: 'SESSIONID已经过期~',
      }
    }
    
    return await next()
  }
}