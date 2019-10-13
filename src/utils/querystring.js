const querystring = require('querystring')

const toJSON = (string) => {
  return querystring.parse(string)
}


module.exports = {
  toJSON
}