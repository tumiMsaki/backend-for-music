const env = process.env.NODE_ENV

let MYSQL_CONF
let REDIS_CONF


if (env === 'dev') {
  MYSQL_CONF = {

  }

  REDIS_CONF = {

  }
}

if (env === 'production') {
  MYSQL_CONF = {

  }

  REDIS_CONF = {

  }
}



module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}