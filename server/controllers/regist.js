import * as userModel from '../../init/util/mysql'
import uuid from 'node-uuid'
import md5 from 'md5'

exports.Signup = async ctx => {
  let { name, password } = ctx.request.body 
  await userModel.searchUser(name)
    .then(async result => {
      if (result[0]) {
        ctx.body = {
          code: 500,
          msg: '存在'
        }
      } else {
        await userModel.addUser([ name, md5(password) ])
          .then(res => {
            console.log('success')
            ctx.body = {
              code: 200,
              msg: 'success'
            }
          })
      }
    }) 
}