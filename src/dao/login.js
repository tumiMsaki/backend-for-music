const { exec, escape } = require('../db/mysql')

const loginLikeDao = (uname,psw) => {
  const username = escape(uname)
  const password = escape(psw)

  sql = `select * from user where name=${username} and password=${password}`

  return exec(sql)
}
module.exports = {
  loginLikeDao
}