const { registLikeDao } = require('../dao/regist')

const regist = (uname, psw) => {
  const flag = registLikeDao(uname, psw)
  console.log(flag)
}


regist('yyyk',123456)
