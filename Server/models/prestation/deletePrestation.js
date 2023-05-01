
const { client } = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');



async function deletePrestation(client, id_banque, categoriesList) {
    try {
        for (let category in categoriesList) {
            const querydelete = `DELETE FROM ${categoriesList[category]} WHERE id_banque = ${id_banque}`
            await client.query(querydelete);
        }
    }
    catch (err) {
        console.log('Error deleting process in prestation', err);
    }

}

module.exports = { deletePrestation };