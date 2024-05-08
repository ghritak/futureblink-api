const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(process.env.DB_URI);

async function connectToMongoDb() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log('Connected to MongoDb');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { connectToMongoDb };
