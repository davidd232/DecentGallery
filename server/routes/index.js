const express = require('express');
const router = express.Router();
const LoginController = require('./Controllers/LoginController');

router.route('/login')
  .post(LoginController.verifyLogin);

module.exports = router;