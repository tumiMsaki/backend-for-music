import Redis from 'ioredis'
import config from '../lib/redis.config'

const redis = new Redis({
  port: config.PORT,
  host: config.HOST,
  family: config.FAMILY
})

export {
  redis
}