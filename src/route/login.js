const { login } = require('../controller/login')
const { Msg } = require('../model/reqMsg')
const { set } = require('../db/redis')
const handleLoginRouter = async (req, res) => {

  if (req.method === 'POST' && req.path === '/api/login') {
    const { username, password } = req.body
    try {
      const result = await login(username, password)
      if (result.name) {
        req.session.username = result.name
        // console.log(req.sessionId,req.session)
        set(req.sessionId, req.session)
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