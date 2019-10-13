const url = require('url')

const URL = (req) => {
  return url.parse(req)
}

module.exports = {
  URL
}