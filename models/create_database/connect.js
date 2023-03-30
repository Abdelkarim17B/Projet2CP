const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'banks_data',
  password: 'postgres',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database', err));

module.exports = client;