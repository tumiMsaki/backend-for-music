const { exec, escape } = require('../db/mysql')

const registLikeDao = async (uname, psw) => {
  let username = escape(uname)
  let password = escape(psw)

  sql = `insert into user (name, password) value (${username}, ${password})`
  
  let flag =  await exec(sql).then(result => result).catch(rej => rej)
  return flag
}

module.exports = {
  registLikeDao
}