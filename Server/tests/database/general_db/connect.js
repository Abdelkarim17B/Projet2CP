const { Client } = require('pg');
require('dotenv').config();

const connectDB = async() => {

  const client = new Client({
    host: process.env.PGHOSTDB,
    port: process.env.PGPORTDB,
    user: process.env.PGUSERDB,
    password: process.env.PGPASSWORDDB,
    database: process.env.PGDATABASEDB,
  });

  try {
    await client.connect();
    console.log('Connected to general PostgreSQL database!');
  } catch (err) {
    console.error('Error connecting to general PostgreSQL database', err);
  }
  finally{
    return client
  }   
}

module.exports = {connectDB};