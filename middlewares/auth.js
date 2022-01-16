const isLogin = (req, res, next) => {
  if (req.session.user == null || req.session.user == undefined) {
    req.flash('alertMessage', 'Session telah habis silahkan signin kembali!!');
    req.flash('alertStatus', 'danger');
  } else {
    next();
  }
}

module.exports = isLogin;