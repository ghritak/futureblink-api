const express = require('express');
const { connectToMongoDb } = require('./db');

const app = express();

connectToMongoDb();

app.use('/', (req, res) => {
  res.send('Hello world');
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
