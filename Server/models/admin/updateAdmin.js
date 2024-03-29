const {Client} = require('pg');

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

async function updateAdmin(client, id , adminObject){
    try{
        await client.query(`UPDATE admin SET nom = '${adminObject.nom}', prenom = '${adminObject.prenom}', email = '${adminObject.email}', mot_de_passe = '${adminObject.mot_de_passe}', cle_speciale = '${adminObject.cle_speciale}', occupation = '${adminObject.occupation}' WHERE id_admin = ${id}`);
        console.log('Admin updated!');
        
    }
    catch(err){
        console.error('Error updating admin', err);
    }
}

module.exports = {updateAdmin};