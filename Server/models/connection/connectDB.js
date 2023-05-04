//const { client } = require('./client');
const { Client } = require('pg');
require('dotenv').config();

async function connectDB(database) {
    if(database === 'general'){
        const client = new Client({
            host: process.env.PGHOSTDB,
            port: process.env.PGPORTDB,
            user: process.env.PGUSERDB,
            password: process.env.PGPASSWORDDB,
            database: process.env.PGDATABASEDB,
          });
    }

    if(database === 'admin'){
        const client = new Client({
            host: process.env.PGHOSTDBADMIN,
            port: process.env.PGPORTDBADMIN,
            user: process.env.PGUSERDBADMIN,
            password: process.env.PGPASSWORDDBADMIN,
            database: process.env.PGDATABASEDBADMIN,
          });
    }

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