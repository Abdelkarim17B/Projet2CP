const {client} = require('pg');

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

async function createBank(client, bankObject) {
    try {
        await client.query(`
            INSERT INTO bank (id_banque, nom_banque, adresse, num_tel, num_fax, adresse_mail, logo, site_web)
            VALUES (${bankObject.id_banque}, '${bankObject.nom_banque}', '${bankObject.adresse}', '${bankObject.num_tel}', '${bankObject.num_fax}', '${bankObject.adresse_mail}', '${bankObject.logo}', '${bankObject.site_web}')
        `);
        console.log('Bank data inserted successfully');
    } catch (err) {
        console.error('Error inserting data into bank table', err);
    }
}

module.exports = {createBank};