const {connectDB} = require('../connectDatabase');
const {disconnectDB} = require('../disconnectDatabase');

const table_names = [
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

async function cleanDB() {
  const client = await connectDB();
  // console.log(client);
  try {
    for (const table of table_names) {
      const query_del = `DELETE FROM ${table} WHERE nom_banque='undefined';`;
      await client.query(query_del);
      console.log(`Cleaned table ${table}`);
    }

  } catch (err) {
    console.error('Error cleaning tables', err);

  } finally {
    console.log('Finished cleaning tables');
  }

  // await disconnectDB(client);
}

cleanDB();