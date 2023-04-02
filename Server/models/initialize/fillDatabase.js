const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const {client} = require('../client');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const table_names = [
  "admin",
  "annonce",
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

function processTable(table, client) {
  const filePath = path.join(__dirname, "../../dataset/tables", `${table}.csv`);
  const stream = fs.createReadStream(filePath).pipe(csv());

  let count = 0;
  let firstRow = null;

  stream.on('data', (row) => {
    try {
      const cols = Object.keys(row).join(', ');
      let values = Object.keys(row).map((col) => {
        if (col === 'id_banque' || col === 'id_admin') {
          return row[col];
        } else {
          return `'${row[col]}'`;
        }
      }).join(', ');

      let query_ins = `INSERT INTO ${table} (${cols}) VALUES (${values})`;
  
      count++;
      if (count === 1) {
          firstRow = row;
        }

      console.log("Inserting following query : ", query_ins, "count : ", count )
      client.query(query_ins);

    } catch (err) {
      console.log(`Error inserting into table ${table} while query = ${query_ins}:`);
      console.error(err);
    }
  });

  stream.on('end', () => {
    console.log(`Finished inserting ${count} rows into table ${table}`);
    if (firstRow) {
      console.log(`The first row of table ${table} is:`, firstRow);
    }
  });

  stream.on('error', (err) => {
    console.error(`Error processing table ${table}:`, err);
  });
}

function fillDB(client) {
  connectDB(client)
    .then(() => {
      for (let table of table_names) {
        console.log("table: ", table);
        processTable(table, client);
        console.log("Finished processing table : ", table);
      }
    })
    .catch((err) => {
      console.log('Error inserting data into tables:', table);
      console.error(err);
    })
    .finally(() => {

      //disconnectDB(client);
      console.log('Finished inserting data into tables');
    });
}

fillDB(client);