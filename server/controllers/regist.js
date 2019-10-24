import * as userModel from '../../init/util/mysql'

exports.Signup = async ctx => {
  let { name, password } = ctx.request.body 
  console.log(typeof name)
  await userModel.searchUser(name)
    .then(async result => {
      if (result[0]) {
        ctx.body = {
          code: 500,
          msg: '存在'
        }
      } else {
        await userModel.addUser([ name, password ])
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