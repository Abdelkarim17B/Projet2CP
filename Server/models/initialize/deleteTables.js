const {client} = require('../client');
const {connectDB} = require('../connectDatabase');
const {disconnectDB} = require('../disconnectDatabase');

async function dropTables(client) {
  try {
    await connectDB(client);

    const dropQuery = 'DROP SCHEMA public CASCADE;';
    await client.query(dropQuery);

    const createQuery = 'CREATE SCHEMA public;';
    await client.query(createQuery);

    console.log('All tables deleted successfully!');
  } catch (err) {
    console.error('Error dropping tables', err);
  } finally {
    await disconnectDB(client);
  }
}

dropTables(client);