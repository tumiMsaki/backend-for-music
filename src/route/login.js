const { login } = require('../controller/login')
const { Msg } = require('../conf/reqMsg')
const handleLoginRouter = async (req, res) => {

  if (req.method === 'POST' && req.path === '/api/login') {
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