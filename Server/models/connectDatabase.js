//const { client } = require('./client');
const { Client } = require('pg');
require('dotenv').config();

const connectDB = async() => {

  const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database!');
  } catch (err) {
    console.error('Error connecting to PostgreSQL database', err);
  }
  finally{
    return client
  }   
}

module.exports = {connectDB};