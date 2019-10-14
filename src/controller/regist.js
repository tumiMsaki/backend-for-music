const { registLikeDao } = require('../dao/regist')

const regist = (uname, psw) => {

  return registLikeDao(uname, psw)
              .then(result => result)
              .catch(error => error)
}


module.exports = {
  regist
}

