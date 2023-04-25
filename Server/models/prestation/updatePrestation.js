const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function updatePrestation(client, prestationObject, categories, types) {
    try{
        await connectDB(client) ;

        for (let category of categories){
            for (let type of types) {
                try {
                    const updateQuery = `UPDATE ${category} SET (id_banque, nom_banque, type` + Object.keys(prestationObject[category]).map(key => `, ${key}`).join('') + ` ) VALUES (${prestationObject.id_banque}, '${prestationObject.nom_banque}', '${type}'` + Object.keys(prestationObject[category]).map(key => `, '${prestationObject[category][key][type]}'`).join('') + `) ;`
                    //  console.log('update Query : ', updateQuery);
                    await client.query(updateQuery);

                    console.log(`Data Updated successfully into ${category} table of ${type} type`);
                    }
                catch (err) {
                    console.error(`Error updating data into ${category} table of ${type} type`, err);
                }
            }
        }
    }
    catch(err){
        console.log('Error updating Prestation : ',err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {updatePrestation};