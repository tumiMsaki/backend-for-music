import mysql from 'mysql'
import config from '../lib/mysql.config'

const pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});

let query = function(sql, value) {
  return new Promise((res, rej) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        rej(err)
      } else {
        connection.query(sql, value, (err, rows) => {
          if (err) {
            rej(err)
          } else {
            res(rows)
          }

          connection.release()
        })
      }
    })
  })
}
  
let createTable = function(sql) {
  return query(sql, [])
}

createTable(users)

exports.addUser = (value) => {
  let _sql = `insert into users(name, password) values(?, ?);`
  return query(_sql, value)
}

exports.searchUser = (name) => {
  let _sql = `select * from users where name="${name}";`
  return query(_sql)
}
