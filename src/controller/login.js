const { loginLikeDao } = require('../dao/login')

const login = (uname, psw) => {
  return loginLikeDao(uname, psw).then(result => {
    return result[0] || {}
  }).catch(err => err)
}

module.exports = {
  login
}