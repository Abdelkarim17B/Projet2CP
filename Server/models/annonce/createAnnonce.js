const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const fs = require('fs');

async function createAnnonce(client, annonceObject) {
    try {
        await client.query(`INSERT INTO annonce (id, titre, sous_titre, image) VALUES ('${annonceObject.id}','${annonceObject.titre}', '${annonceObject.sous_titre}', '${annonceObject.image}')`);
        console.log('annonce created!');
    }
    catch (err) {
        console.error('Error creating annonce', err);
    }
    finally {
        //  await disconnectDB(client)
        console.log('Done creating annonce');
    }
}

module.exports = { createAnnonce };