var querystring = require('querystring')
var util = require('util')
const handleMusicRouter = require('./src/route/music')
const handleLoginRouter = require('./src/route/login')
const handleRegistRouter = require('./src/route/regist')

const getPostData = (req) => {
  const promise = new Promise((res, rej) => {
    if (req.method !== 'POST') {
      res({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      reslove({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk
    })
    req.on('end', () => {
      if (!postData) {
        res({})
        return
      }
      res(postData)
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  getPostData(req).then(data => {
    req.body = JSON.parse(data)

    const musicData = handleMusicRouter(req, res)
    if (musicData) {
      res.end(JSON.stringify(musicData))
      return
    }

  const loginData = handleLoginRouter(req, res)
    if (loginData) {
        loginData.then(data => {
          res.end(JSON.stringify(data))
          return 
        })
    }

    const registData = handleRegistRouter(req, res)
    if (registData) {
        res.end(JSON.stringify(registData))
        return 
    }
  })
  
}

module.exports = serverHandle