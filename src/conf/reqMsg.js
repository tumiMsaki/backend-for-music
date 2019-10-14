const Msg = {
  loginSuccess: () => {
    return {
      code:200,
      msg: 'login success'
    }
  },
  
  loginFail: () => {
    return {
      code: 201,
      msg: 'login fail'
    }
  },

  registSuccess: () => {
    return {
      code: 200,
      msg: 'regist ok'
    }
  },

  registFail: () => {
    return {
      code: 201,
      msg: 'username is used'
     }
  }


}


module.exports = {
  Msg
}