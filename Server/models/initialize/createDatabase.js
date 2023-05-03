const { log } = require('console');
const {client} = require('./client');
const {connectDB} = require('./connectDatabase');
const {disconnectDB} = require('../disconnectDatabase');
const fs = require('fs');
const path = require('path');

const table_names = [
  "admin",
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

async function createTables(client) {
  const client = await connectDB();
  try {
    for (const table of table_names) {
        const file = path.join(__dirname,"../../dataset/tables", `${table}.csv`);
        //console.log(file);
      const data = fs.readFileSync(file, 'utf8');
      const columns = data.split('\n')[0].split(',').map(col => {
        if (col === 'id_banque' || col === 'id_admin' || col === 'id_annonce' || col === 'valeur_statistique') {
          return `${col} INTEGER`;
        }
        return `${col} VARCHAR(255)`;
      });
      const query_in = `CREATE TABLE ${table} (${columns.join(', ')});`;
      await client.query(query_in);
      console.log(`Created table ${table}`);
    }

  } catch (err) {
    console.error('Error creating tables', err);

  } finally {
    console.log('Finished creating tables');
     await disconnectDB(client);
  }
}

createTables(client);