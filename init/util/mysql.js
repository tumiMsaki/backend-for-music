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

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     user_uuid VARCHAR(100) NOT NULL,
     uname VARCHAR(100) NOT NULL,
     password VARCHAR(100) NOT NULL,
     nickname VARCHAR(100),
     PRIMARY KEY ( id )
    );`
  
let collections = 
    `create table if not exists collections(
      id INT NOT NULL AUTO_INCREMENT,
      user_id VARCHAR(100) NOT NULL,
      music_id VARCHAR(100) NOT NULL,
      PRIMARY KEY ( id )
    );`

let musicList = 
    `create table if not exists musci(
      id INT NOT NULL AUTO_INCREMENT,
      music_uuid VARCHAR(100) NOT NULL,
      music_name VARCHAR(100) NOT NULL,
      music_src VARCHAR(100) NOT NULL,
      PRIMARY KEY ( id )
    );`
  
let createTable = function(sql) {
  return query(sql, [])
}

createTable(users)
createTable(collections)
createTable(musicList)

exports.addUser = (value) => {
  let _sql = `insert into users(user_uuid, uname, password, nickname) values(?, ?, ?, ?);`
  return query(_sql, value)
}

exports.searchUser = (name) => {
  let _sql = `select * from users where uname="${name}";`
  return query(_sql)
}
