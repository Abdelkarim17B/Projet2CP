const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');



async function deletePrestation(client, id_banque, categoriesList) {
    try{
        await connectDB(client) ;
        for(let category in categoriesList){
            await client.query(`DELETE FROM ${category} WHERE id_banque = ${id_banque}`);
        }
    }
    catch(err){
        console.log('Error deleting process in prestation', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {deletePrestation};