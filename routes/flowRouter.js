const express = require('express');
const { getFlow } = require('../controller/flow/getFlow');
const { authenticateToken } = require('../middleware/authenticateToken');

const flowRouter = express.Router();

flowRouter.use('/getflow', authenticateToken, getFlow);

module.exports = { flowRouter };
