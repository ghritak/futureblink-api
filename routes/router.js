const express = require('express');
const { authRouter } = require('./authRouter');

const router = express.Router();

router.use('/api/auth', authRouter);

module.exports = { router };
