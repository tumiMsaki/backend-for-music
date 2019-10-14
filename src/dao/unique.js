const { exec, escape } = require('../db/mysql')

const uniqueLikeDao = (usr) => {
  const username = escape(usr)
  sql = `select * from user where name=${username}`
  return exec(sql)
}

module.exports = {
  uniqueLikeDao
}