const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function updateAnnonce(client, id , annonceObject) {
    try {
        await client.query(`UPDATE annonce SET title = '${annonceObject.title}', subTitle = '${annonceObject.subTitle}', image = '${annonceObject.image}' WHERE id = ${id}`);
        console.log('annonce updated!');
    }
    catch (err) {
        console.error('Error updating annonce', err);
    }
}

module.exports = { updateAnnonce };