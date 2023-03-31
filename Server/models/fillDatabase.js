const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { client, connectDB } = require('./connectDatabase');
const { query } = require('express');

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

async function processTable(table) {
  const filePath = path.join(__dirname, "../../dataset/tables", `${table}.csv`);
  const stream = fs.createReadStream(filePath).pipe(csv());

  let count = 0;
  let firstRow = null;

  stream.on('data', async (row) => {
    try {
      // Parse the row data and insert into the corresponding table
      const cols = Object.keys(row).join(', ');
      let values = Object.keys(row).map((col) => {
        if (col === 'id_banque' || col === 'id_admin') {
          return row[col];
        } else {
          return `'${row[col]}'`;
        }
      }).join(', ');
      const query = `INSERT INTO ${table} (${cols}) VALUES (${values})`;
      count++;
      if (count === 1) {
          firstRow = row;
        }
        await client.query(query);
    } catch (err) {
      console.log(`Error inserting row ${count} into table ${table}:`);
      console.log(query);
      console.error(err);
    }
  });

  return new Promise((resolve, reject) => {
    stream.on('end', async () => {
      console.log(`Finished inserting ${count} rows into table ${table}`);
      if (firstRow) {
        console.log(`The first row of table ${table} is:`, firstRow);
      }
      resolve();
    });

    stream.on('error', (err) => {
      console.error(`Error processing table ${table}:`, err);
      reject(err);
    });
  });
}

(async () => {
  try {
    await connectDB();
    for (let table of table_names) {
      console.log("table: ", table);
      await processTable(table);
    }
  } catch (err) {
    console.log('Error inserting data into tables:');
    console.error(err);
  }
})();
