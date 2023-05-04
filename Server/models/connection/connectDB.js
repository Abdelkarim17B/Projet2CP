const { Client } = require('pg');
require('dotenv').config();

async function connectDB(database) {
    if(database === 'general'){
        client = new Client({
            host: process.env.PGHOSTDB,
            port: process.env.PGPORTDB,
            user: process.env.PGUSERDB,
            password: process.env.PGPASSWORDDB,
            database: process.env.PGDATABASEDB,
          });
    }

    if(database === 'admin'){
        client = new Client({
            host: process.env.PGHOSTDBADMIN,
            port: process.env.PGPORTDBADMIN,
            user: process.env.PGUSERDBADMIN,
            password: process.env.PGPASSWORDDBADMIN,
            database: process.env.PGDATABASEDBADMIN,
          });
    }

    //console.log("client from connection : ", client.connectionParameters);

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