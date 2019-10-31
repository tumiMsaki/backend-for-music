const assert = require('assert')
const request = require('request')

const host = 'http://localhost:3000'

describe('测试注册是否正常', () => {
  it('注册 code 应该等于4 因为账号存在', done => {
    const qs = {
      name: 'yk',
      password: 1234
    }

    request.post({
      url: `${host}/api/regist`,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: qs
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        assert(body.code === 4)
        done()
      }
      else{
        done(err)
      }
    })
  })
})

