const LoginController = {
  verifyLogin: (req, res) => {
    console.log(req.body);
    if (req.body.username === 'david' && req.body.password === 'david') {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  }
}


module.exports = LoginController;