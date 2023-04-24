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

async function updateBank(client, bankObject){
    try{
        await connectDB(client);
        await client.query(`UPDATE bank SET nom_banque = '${bankObject.nom_banque}', adresse = '${bankObject.adresse}', num_tel = '${bankObject.num_tel}', num_fax = '${bankObject.num_fax}', adresse_mail = '${bankObject.adresse_mail}', logo = '${bankObject.logo}', site_web = '${bankObject.site_web}' WHERE id_banque = ${bankObject.id_banque}`);
        console.log('Bank updated!');
    }
    catch(err){
        console.error('Error updating bank', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {updateBank};