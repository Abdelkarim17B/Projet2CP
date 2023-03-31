const {client, connectDB} = require('./connectDatabase');
const fs = require('fs');
const path = require('path');

const table_names = [
  "admin",
  "bank",
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
  try {
    await connectDB();
    console.log('Connected to PostgreSQL database!');

    for (const table of table_names) {
        const file = path.join(__dirname,"../../dataset/tables", `${table}.csv`);
        //console.log(file);
      const data = fs.readFileSync(file, 'utf8');
      const columns = data.split('\n')[0].split(',').map(col => {
        if (col === 'id_banque' || col === 'id_admin') {
          return `${col} INTEGER`;
        }
        return `${col} VARCHAR(255)`;
      });
      const query = `CREATE TABLE ${table} (${columns.join(', ')});`;
      await client.query(query);
      console.log(`Created table ${table}`);
    }
  } catch (err) {
    console.error('Error creating tables', err);
  } finally {
    await client.end();
  }
}

createTables();

module.exports = {table_names};