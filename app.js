const querystring = require('querystring')
const handleLoginRouter = require('./src/route/login')
const handleRegistRouter = require('./src/route/regist')
const { set, get } = require('./src/db/redis')

const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (10))
  return d.toUTCString()
}

const getPostData = (req) => {

  const promise = new Promise((res, rej) => {
    if (req.method !== 'POST') {
      res({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      res({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        res({})
        return
      }
      res(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  const url = req.url
  req.path = url.split('?')[0]

  req.cookie = {}
  const cookiestr = req.headers.cookie || ''
  cookiestr.split(';').forEach(element => {
    if (!element) {
      return
    }
    const arr = element.split('=')
    const key = arr[0].trim()
    const val = arr[1].trim()
    req.cookie[key] = val
  });

  let needSetCookie = false
  let userId = req.cookie.userid
  
  if (!userId) {
    needSetCookie = true
    userId = `${Date.now()}_${Math.random()}`
    set(userId, {})
  }

  req.sessionId = userId
  get(req.sessionId).then(sessionData => {
    if (sessionData == null) {
      set(req.sessionId, {})
      req.session = {}
    } else {
      req.session = sessionData
    }
    return getPostData(req)
  }).then(data => {
    req.body = data

  const loginData = handleLoginRouter(req, res)
    if (loginData) {
        loginData.then(data => {
          if (data) {
            if (needSetCookie) {
              res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; Expires=${getCookieExpires()}`)
            }
            res.end(JSON.stringify(data))
          }
          return 
        })
    }

    const registData = handleRegistRouter(req, res)
    if (registData) {
          registData.then(data => {
            if(data) {
              if (needSetCookie) {
                res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; Expires=${getCookieExpires()}`)
              }
              res.end(JSON.stringify(data))
            }
            return
          }) 
    }
  }).catch(err => {
    console.log(err)
  })
}

module.exports = serverHandle