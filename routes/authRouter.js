const express = require('express');
const { login } = require('../controller/auth/login');
const { signup } = require('../controller/auth/signup');
const {
  validateLogin,
  validateSignup,
} = require('../middleware/validator/auth');

const authRouter = express.Router();

authRouter.post('/login', validateLogin, login);

authRouter.post('/signup', validateSignup, signup);

module.exports = { authRouter };
