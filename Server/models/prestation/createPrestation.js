const {client} = require('pg');

async function createPrestation(client, prestationObject, categories, types) {
    for (let category of categories){
        for (let type of types) {
            try {
                await client.query(`INSERT INTO ${category} (id_banque, nom_banque, ${type}` + 
                Object.keys(prestationObject[category]).map(key => `, ${key}`).join('')) + `) 
                VALUES (${prestationObject.id_banque}, '${prestationObject.nom_banque}', ${type}` + 
                Object.keys(prestationObject[category]).map(key => `, '${prestationObject[category][key][type]}'`).join('') + `) ;` 

                console.log(`Data inserted successfully into ${category} table of ${type} type`);
                }
            catch (err) {
                console.error(`Error inserting data into ${category} table of ${type} type`, err);
            }
        }
    }
}

module.exports = {createPrestation};