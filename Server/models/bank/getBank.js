const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

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

async function getBank(client, id){
    try{
        await connectDB(client) ;
        const result = await client.query(`SELECT * FROM bank WHERE id_banque = ${id}`);
        console.log('Bank fetched!');
        return result.rows[0];
    }
    catch(err){
        console.error('Error fetching admin', err);
    }
    finally{
        await disconnectDB(client) ;
    }
}

async function getAllBank(client) {
    try 
    {
        await connectDB(client) ;
        const result = await client.query(`SELECT * FROM bank`);
        console.log('All Banks are fetched!');
        return result.rows;
    }
    catch(err)
    {
        console.error('Error fetching admin' , err)
    }
    finally{
        await disconnectDB(client) ;
    }
}

module.exports = {getBank , getAllBank};