const { Client } = require('pg');
require('dotenv').config();

const connectDB = async() => {

  const client = new Client({
    host: process.env.PGHOSTDBADMIN,
    port: process.env.PGPORTDBADMIN,
    user: process.env.PGUSERDBADMIN,
    password: process.env.PGPASSWORDDBADMIN,
    database: process.env.PGDATABASEDBADMIN,
  });

  try {
    await client.connect();
    console.log('Connected to admin PostgreSQL database!');
  } catch (err) {
    console.error('Error connecting to admin PostgreSQL database', err);
  }
  finally{
    return client
  }   
}

module.exports = {connectDB};