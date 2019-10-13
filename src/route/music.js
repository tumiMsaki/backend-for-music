const { URL } = require('../utils/url')
const handleMusicRouter = (req, res) => {

  const method = req.method
  const url = URL(req.url)
  const path = url.path
  if (method === 'GET' && req.path === '/api/music/list') {
    return {
      msg: 'this is music list'
    }
  }
}

module.exports = handleMusicRouter