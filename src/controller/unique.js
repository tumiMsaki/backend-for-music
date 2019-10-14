const { uniqueLikeDao } = require('../dao/unique')

const unique = (usr) => {
  return uniqueLikeDao(usr)
  .then(result => {
    return result[0] || {}
  }).catch(err => err)
}

module.exports = {
  unique
}