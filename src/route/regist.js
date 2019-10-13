const { URL } = require('../utils/url')
const { regist } = require('../controller/regist')
const { unique } = require('../controller/unique')

const handleRegistRouter = (req, res) => {

  const method = req.method
  if (method === 'POST' && req.path === '/api/regist') {
    const { username, password } = req.body
    unique(username) ? null : regist(username, password)
    
  }
}

module.exports = handleRegistRouter