const handleUserRouter = (req, res) => {

  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'GET' && path === '/api/user') {
    return {
      msg: 'this is user api'
    }
  }
}

module.exports = handleUserRouter