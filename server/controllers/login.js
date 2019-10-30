import * as userModel from '../../init/util/mysql' 
import * as Cookie from '../utils/cookie'
import md5 from 'md5'

exports.Signin = async ctx => {
  let { name, password } = ctx.request.body
  await userModel.searchUser(name) 
    .then(result => {
      let res = result
      if (res.length && name === res[0]['uname'] && md5(password) === res[0]['password']) {
        Cookie.setCookie(name)
        ctx.body = {
          code: 200,
          msg: 'login success'
        }
      } else {
        ctx.body = {
          code: 500,
          msg: 'username or password error'
        }
      }
    }).catch(err => {
      console.log(err)
    })
}