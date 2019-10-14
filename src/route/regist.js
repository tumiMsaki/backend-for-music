const { regist } = require('../controller/regist')
const { unique } = require('../controller/unique')
const { Msg } = require('../model/reqMsg')

const handleRegistRouter = async (req, res) => {

  if (req.method === 'POST' && req.path === '/api/regist') {
    const { username, password } = req.body
    try {
      const flag = await unique(username)
      if (!flag.name) {
        try {
          await regist(username, password)
          return Msg.registSuccess()
        } catch {
          return {
            code: 500,
            msg: 'service dead'
          }
        }
      } else {
        return Msg.registFail()
      }
    } catch (err) {
      return {
        code: 500,
        msg: 'service dead'
      }
    }
  } else {
    return false
  }
}

module.exports = handleRegistRouter