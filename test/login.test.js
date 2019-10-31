const assert = require('assert')
const request = require('request')

const host = 'http://localhost:3000'

describe('测试登录是否正常', () => {
  it('登录 code 应该等于200', done => {
    const qs = {
      name: 'yk',
      password: 1234
    }

    request.post({url: `${host}/api/login`, qs: qs}, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        body = JSON.parse(body)
        console.log(url)
        assert(body.code === 200)
        done()
      }
      else{
        done(err)
      }
    })
  })
})

