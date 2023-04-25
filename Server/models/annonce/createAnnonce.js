const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

/* Input template */
const annonceObject = {
    id_annonce : 1,
    titre: 'Best bank in Algeria !',
    description: 'Here is a description of the bank',
    date: '24/04/2023',
}


async function createAnnonce(client, annonceObject){
    try{
        //await connectDB(client);
        await client.query(`INSERT INTO annonce (id_annonce, titre, description, date) VALUES ('${annonceObject.id_annonce}','${annonceObject.titre}', '${annonceObject.description}', '${annonceObject.date}')`);
        console.log('annonce created!');
    }
    catch(err){
        console.error('Error creating annonce', err);
    }
    finally{
       // await disconnectDB(client);
    }
}

module.exports = {createAnnonce};