const express = require('express');
const { getFlow } = require('../controller/flow/getFlow');
const { authenticateToken } = require('../middleware/authenticateToken');
const { updateFlow } = require('../controller/flow/updateFlow');

const flowRouter = express.Router();

flowRouter.use('/getflow', authenticateToken, getFlow);
flowRouter.put('/updateflow', authenticateToken, updateFlow);

module.exports = { flowRouter };
