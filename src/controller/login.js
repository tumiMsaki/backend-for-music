const { loginLikeDao } = require('../dao/login')

const login = (uname, psw) => {
  return loginLikeDao(uname, psw).then(result => {
    return result[0] || {}
  }).catch(() => {
    return {
      code: 500,
      msg: 'service bad'
    }
  })
}

module.exports = {
  login
}