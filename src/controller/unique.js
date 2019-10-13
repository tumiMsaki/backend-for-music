const { uniqueLikeDao } = require('../dao/unique')

const unique = (usr) => {
  uniqueLikeDao(usr)
              .then(result => result)
              .catch(error => error)
}

module.exports = {
  unique
}