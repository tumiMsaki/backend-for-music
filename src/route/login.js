const { URL } = require('../utils/url')
const { login } = require('../controller/login')
const { Msg } = require('../model/reqMsg')
const handleLoginRouter = async (req, res) => {

  const method = req.method
  const url = URL(req.url)
  const path = url.path

  if (method === 'POST' && path === '/api/login') {
    const { username, password } = req.body
    try {
      const result = await login(username, password)
      if (result.name) {
        return Msg.loginSuccess()
      } else {
        return Msg.loginFail()
      }
    } catch {
      return {
        code: 500,
        msg: 'service dead'
      }
    }
  } else {
    return false
  } 
}

module.exports = handleLoginRouter