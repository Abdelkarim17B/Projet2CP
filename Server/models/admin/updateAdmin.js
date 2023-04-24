const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

/* Input template */
const adminObject = {
    id_admin : 1,
    nom: 'admin',
    prenom: 'admin',
    email: '',
    mot_de_passe: 'admin',
    cle_speciale: '1234',
    occupation: 'Alger',
}

async function updateAdmin(client, adminObject){
    try{
        await connectDB(client);
        await client.query(`UPDATE admin SET nom = '${adminObject.nom}', prenom = '${adminObject.prenom}', email = '${adminObject.email}', mot_de_passe = '${adminObject.mot_de_passe}', cle_speciale = '${adminObject.cle_speciale}', occupation = '${adminObject.occupation}' WHERE id_admin = ${adminObject.id_admin}`);
        console.log('Admin updated!');
    }
    catch(err){
        console.error('Error updating admin', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {updateAdmin};