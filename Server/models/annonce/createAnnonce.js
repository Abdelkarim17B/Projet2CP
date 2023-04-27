const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const fs = require('fs');

async function createAnnonce(client, annonceObject) {
    try {
        //await connectDB(client);
        await client.query(`INSERT INTO annonce (id, title, subTitle, image) VALUES ('${annonceObject.id}','${annonceObject.title}', '${annonceObject.subTitle}', '${annonceObject.image}')`);
        console.log('annonce created!');
    }
    catch (err) {
        console.error('Error creating annonce', err);
    }
    finally {
        //await disconnectDB(client);
    }
}

module.exports = { createAnnonce };