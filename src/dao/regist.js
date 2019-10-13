const { exec, escape } = require('../db/mysql')

const registLikeDao = (uname, psw) => {
  let username = escape(uname)
  let password = escape(psw)

  sql = `insert into user (name, password) value (${username}, ${password})`
  
  return exec(sql)
}

module.exports = {
  registLikeDao
}