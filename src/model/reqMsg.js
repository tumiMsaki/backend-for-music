const Msg = {
  success: () => {
    return {
      code:200,
      msg: 'login success'
    }
  },
  
  fail: () => {
    return {
      code: 201,
      msg: 'login fail'
    }
  }
}


module.exports = {
  Msg
}