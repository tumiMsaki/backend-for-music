const handleMusicRouter = require('./src/route/music')
const handleUserRouter = require('./src/route/user')

const serverHandle = (req, res) => {

  res.setHeader('Content-type', 'application/json')
  
  const musicData = handleMusicRouter(req, res)
    if (musicData) {
      res.end(JSON.stringify(musicData))
      return
    }

  const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return 
    }

  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 NOT FOUND\n")
  res.end()
}

module.exports = serverHandle