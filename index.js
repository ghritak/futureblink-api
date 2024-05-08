const express = require('express');
const { router } = require('./routes/router');
require('./db');

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
