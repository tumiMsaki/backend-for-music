const { URL } = require('../utils/url')
const { login } = require('../controller/login')
const { Msg } = require('../model/reqMsg')
const handleLoginRouter = (req, res) => {
  
  const method = req.method
  const url = URL(req.url)
  const path = url.path

  if (method === 'POST' && path === '/api/login') {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(result => {
      if(result.name){
        return Msg.success()
      } else {
        return Msg.fail()
      }
    }).catch(err => {
      return err
    })
  } 
}

module.exports = handleLoginRouter