const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function updateAnnonce(client, annonceObject){
    try{
        await connectDB(client);
        await client.query(`UPDATE annonce SET id = '${annonceObject.id_annonce}', title = '${annonceObject.title}', subTitle = '${annonceObject.subTitle}', image = '${annonceObject.image}'`);
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