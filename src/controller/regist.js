const { registLikeDao } = require('../dao/regist')

const regist = (uname, psw) => {

  registLikeDao(uname, psw)
              .then(result => result)
              .catch(error => error)
}


module.exports = {
  regist
}

