module.exports ={
  checkLogin: (ctx) => {
    if (!ctx.session || !ctx.session.user) {     
      ctx.redirect('api/Signin');
      return false;
    }
    return true;
  }
}