const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const {connectDB} = require('../connection/connectDB');
const {disconnectDB} = require('../connection/disconnectDB');

const table_names = [
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

async function processTable(table, client) {
  console.log("-----> CLIENT from processTable", client.connectionParameters.host);

  const filePath = path.join(__dirname, "../../dataset/tables", `${table}.csv`);
  const stream = fs.createReadStream(filePath).pipe(csv());


  stream.on('data', (row) => {
    try {
      const cols = Object.keys(row).join(', ');
      let values = Object.keys(row).map((col) => {
        if (col === 'id_banque') {
          return row[col];
        } else {
          return `'${row[col]}'`;
        }
      }).join(', ');

      let query_ins = `INSERT INTO ${table} (${cols}) VALUES (${values})`;
      client.query(query_ins);
      console.log("query_ins: ", query_ins)

    } catch (err) {
      console.log(`Error inserting into table ${table} while query = ${query_ins}:`);
      console.error(err);
    }
  });

  stream.on('error', (err) => {
    console.error(`Error processing table ${table}:`, err);
  });
}

async function fillDB(table_names) {
  const client = await connectDB('general')
  //console.log(client.connectionParameters);
  //const result = await client.query('SELECT COUNT(*) FROM bank');
  //console.log(result.rows);

    try{
      for (let table of table_names) {
        console.log("table: ", table);
        try{
          console.log("---------------> Start processing table : ", table);
          await processTable(table, client);
          console.log("---------------> Finish processing table : ", table);
        }
        catch(err){
          console.error("Error processing table : ", table, err);
        }
        finally{
        console.log("Finished processing table : ", table);
        }
      }
    }

    catch(err){
      console.error("Error inserting process");
    }

    finally{
      console.log('Finished inserting data into tables');
    };

  //await disconnectDB(client);
}

fillDB(table_names);