const checkSql = `select * from user where name=`
const { exec, escape } = require('../db/mysql')

const uniqueLikeDao = (usr) => {
  const username = escape(usr)
  sql = `${checkSql}${username}`
  return exec(sql)
}

module.exports = {
  uniqueLikeDao
}