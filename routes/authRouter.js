const express = require('express');
const { login } = require('../controller/auth/login');
const { signup } = require('../controller/auth/signup');

const authRouter = express.Router();

authRouter.use('/login', login);
authRouter.post('/signup', signup);

module.exports = { authRouter };
