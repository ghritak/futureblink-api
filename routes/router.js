const express = require('express');
const { authRouter } = require('./authRouter');
const { flowRouter } = require('./flowRouter');

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/flow', flowRouter);

module.exports = { router };
