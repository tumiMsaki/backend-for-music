const config = {
  key: 'koa:sess',
  maxAge: 10000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
}

module.exports = config