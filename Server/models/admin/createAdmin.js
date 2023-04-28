const {client} = require('pg');
//later disscuss if we should use shorid method to generate random ids for the admins

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


async function createAdmin(client, adminObject){
    try{
        await client.query(`INSERT INTO admin (id_admin, nom, prenom, email, mot_de_passe, cle_speciale, occupation) VALUES ('${adminObject.id_admin}','${adminObject.nom}', '${adminObject.prenom}', '${adminObject.email}', '${adminObject.mot_de_passe}', '${adminObject.cle_speciale}', '${adminObject.occupation}')`);
        console.log('Admin created!');
    }
    catch(err){
        console.error('Error creating admin', err);
    }
}

module.exports = {createAdmin};