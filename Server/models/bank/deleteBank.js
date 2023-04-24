const {Client} = require('pg');

/* Input template */
const bankObject = {
    id_banque : 1,
    nom_banque: 'banque_01',
    adresse: 'kais',
    num_tel: '0515484625',
    num_fax: '033548422',
    adresse_mail: 'banque_01@gmail.com',
    logo: 'logo.png',
    site_web: 'banque_01.com',
};

async function deleteBank(client, id){
    try{
        await connectDB(client);
        await client.query(`DELETE FROM bank WHERE id_banque = ${id}`);
        console.log('Bank deleted!');
    }
    catch(err){
        console.error('Error deleting bank', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {deleteBank};