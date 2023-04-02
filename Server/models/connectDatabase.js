const { client } = require('./client');

//console.log(client)

async function connectDB(client) {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database!');
  } catch (err) {
    console.error('Error connecting to PostgreSQL database', err);
  }
}

module.exports = {connectDB};