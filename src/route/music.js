const handleMusicRouter = (req, res) => {

  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'GET' && path === '/api/music/list') {
    return {
      msg: 'this is music list'
    }
  }
}

module.exports = handleMusicRouter