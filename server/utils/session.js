import { redis } from '../../init/util/redis'

exports.setCookie = async (ctx, _user, _uuid) => {
  const maxAge = 100000;
  const c = Buffer.from(_user).toString('base64')
  ctx.cookies.set('_user', c, {
    maxAge,
    httpOnly: true,
    overwrite: false 
  })

  await redis.set(c, _uuid, "EX", maxAge / 1000)
}

exports.getCookie = ctx => {
  return ctx.cookies.get('_user')
}

exports.getRedisClient = async ctx => {
  const _user = ctx.cookies.get('_user')
  const id = await redis.get(_user)
  return id
}

exports.cancelRedisClient = async ctx => {
  const _user = ctx.cookies.get('_user')
  return await redis.del(_user)
}