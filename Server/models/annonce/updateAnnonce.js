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

async function updateAnnonce(client, annonceObject){
    try{
        await connectDB(client);
        await client.query(`UPDATE annonce SET id_annonce = '${annonceObject.id_annonce}', titre = '${annonceObject.titre}', description = '${annonceObject.description}', date = '${annonceObject.date}'`);
        console.log('annonce updated!');
    }
    catch(err){
        console.error('Error updating annonce', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {updateAnnonce};