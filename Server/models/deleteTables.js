const {client, connectDB} = require('./connectDatabase');

async function dropTables() {
  try {
    await connectDB();
    console.log('Connected to PostgreSQL database!');

    const dropQuery = 'DROP SCHEMA public CASCADE;';
    await client.query(dropQuery);

    const createQuery = 'CREATE SCHEMA public;';
    await client.query(createQuery);

    console.log('All tables deleted successfully!');
  } catch (err) {
    console.error('Error dropping tables', err);
  } finally {
    await client.end();
  }
}

dropTables();