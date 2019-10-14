const querystring = require('querystring')
const handleLoginRouter = require('./src/route/login')
const handleRegistRouter = require('./src/route/regist')

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

  getPostData(req).then(data => {
    req.body = data

  const loginData = handleLoginRouter(req, res)
    if (loginData) {
        loginData.then(data => {
          if (data) {
            res.end(JSON.stringify(data))
          }
          return 
        })
    }

    const registData = handleRegistRouter(req, res)
    if (registData) {
          registData.then(data => {
            if(data) {
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