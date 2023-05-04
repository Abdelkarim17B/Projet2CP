const {connectDB} = require('../connection/connectDB');
const {disconnectDB} = require('../connection/disconnectDB');
const fs = require('fs');
const path = require('path');

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

async function createTables() {
  const client = await connectDB('general');
  console.log(client);
  try {
    for (const table of table_names) {
        const file = path.join(__dirname,"../../dataset/tables", `${table}.csv`);
        const data = fs.readFileSync(file, 'utf8');
        const columns = data.split('\n')[0].split(',').map(col => {
        if (col === 'id_banque' || col === 'id_annonce' || col === 'valeur_statistique') {
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
  }

  await disconnectDB(client);
}


async function createAdminTable() {
  const client = await connectDB('admin');
  try {
        const file = path.join(__dirname,"../../dataset/tables", `admin.csv`);
        const data = fs.readFileSync(file, 'utf8');
        const columns = data.split('\n')[0].split(',').map(col => {
        if (col === 'id_admin') {
          return `${col} INTEGER`;
        }
        if(col === 'sudo'){
          return `${col} BOOLEAN`;
        }
        return `${col} VARCHAR(255)`;
      });
      const query_in = `CREATE TABLE admin (${columns.join(', ')});`;
      await client.query(query_in);
      console.log(`Created table admin`);
    }

   catch (err) {
    console.error('Error creating Admin table', err);
    
  } finally {
    console.log('Finished creating Admin table');
  }

  await disconnectDB(client);
}

createAdminTable();