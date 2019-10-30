exports.setCookie = async ctx => {
  return (function(value) {
    ctx.cookies.set('_user', value, {
      maxAge: 10 * 60 * 1000,
      httpOnly: true,
      overwrite: false 
    })
  })()
}

exports.getCookie = async ctx => {
  return ctx.get('_user')
}