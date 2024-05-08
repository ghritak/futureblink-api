const mongoose = require('mongoose');

async function connectToMongoDb() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: 'futureblink',
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToMongoDb;
