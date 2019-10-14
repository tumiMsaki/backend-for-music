const redis = require('redis')

const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('err', err => {
   console.log(err);
})

function set(key, val) {
  if (typeof(val) === 'object') {
    val = JSON.stringify(val)
  }
  
  redisClient.set(key, val, () => {
    console.log('redis set it')
  })
}

function get(key) {
  const promise = new Promise((res, rej) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        rej(err)
        return
      }
      if (val == null) {
        res(null)
        return
      }
      try {
        res(JSON.parse(val))
      } catch (err) {
        res(val)
      }
    })
  })
  return promise
}


module.exports = {
  set,
  get
}