const mysql = require('mysql')

const con = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'yym891230',
    port: 3306,
    database: 'node',
  }
)

con.connect()

function exec(sql) {
  const promise = new Promise((res, rej) => {
    con.query(sql, (err, result) => {
      if (err) {
        rej(err)
        return
      }
      res(result)
    })
  })
  return promise
}

module.exports = {
  exec,
  escape: mysql.escape
}