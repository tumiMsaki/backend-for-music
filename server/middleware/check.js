module.exports = () => {
  return async (ctx, next) => {
    if (ctx.request.url === '/api/login' || ctx.request.url === '/api/regist') {
      return await next()
    }
    const name = ctx.session.name
    if (!name) {
      return ctx.body = {
        code: 4,
        msg: '未登陆或登陆过期'
      }
    } else {
      return await next()
    }
  }
}