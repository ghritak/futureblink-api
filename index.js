require('dotenv').config();
require('./db');
const express = require('express');
const { router } = require('./routes/router');
const connectToMongoDb = require('./db');

const app = express();

connectToMongoDb();

app.use(express.json());

app.use('/', router);

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
