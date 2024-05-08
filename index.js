require('dotenv').config();
require('./db');
const express = require('express');
const cors = require('cors');

const { router } = require('./routes/router');
const connectToMongoDb = require('./db');

const app = express();

connectToMongoDb();

const allowedOrigins = process.env.ORIGINS
  ? process.env.ORIGINS.split(',')
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed);
  },
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/', router);

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
