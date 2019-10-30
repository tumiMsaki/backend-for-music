import Store from '../../server/utils/Store'
import CONFIG from './redis.config'
const config = {
  key: 'koa:sess',
  maxAge: 100000,
  store: new Store({
    port: CONFIG.PORT,
    host: CONFIG.HOST
  })
}

module.exports = config