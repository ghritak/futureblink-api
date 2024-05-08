const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(process.env.DB_URI);

async function connectToMongoDb() {
  try {
    const database = client.db('futureblink');
    const users = database.collection('users');

    const query = { title: 'Back to the Future' };
    const movie = await users.findOne(query);

    console.log('Connected to MongoDb');
  } finally {
    await client.close();
  }
}

connectToMongoDb().catch(console.dir);
