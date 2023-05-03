const {connectDB} = require('../connection/connectDB.js');
const {disconnectDB} = require('../connection/disconnectDB.js');

const table_names = [
  "annonce",
  "bank",
  "stat",
  "gestion_de_compte",
  "gestion_a_distance",
  "option_de_payment",
  "moyens_de_payment",
  "placement",
  "prets_et_credits",
  "epargne",
  "coffre_fort",
  "financement_externe"
];

async function emptyTables(table_names) {
  try {
    const client = await connectDB('general');
    console.log("Client : ", client.connectionParameters);

    for (let table of table_names) {
      const dropQuery = `TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE;`;
      await client.query(dropQuery);
      console.log(`Table ${table} dropped successfully!`);
    }

  } catch (err) {
    console.error('Error emptying tables', err);

  } finally {
    console.log('All tables deleted successfully!');
    await disconnectDB(client);
  }
}

emptyTables(table_names)