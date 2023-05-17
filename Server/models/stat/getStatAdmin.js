const {client} = require('pg')
const {connectDB} = require('../connectDatabase');
const {disconnectDB} = require('../disconnectDatabase');

async function getStatAdmin(client){
    stat = {}
    try{
        // adminNumber
        const adminResult = await client.query('SELECT COUNT(*) FROM admin');
        const adminNumber = adminResult.rows[0].count;
        //console.log('Number of admins : ', adminNumber);
        // annonceNumber
        const annonceResult = await client.query('SELECT COUNT(*) FROM annonce');
        const annonceNumber = annonceResult.rows[0].count;
        //console.log('Number of annonces : ', annonceNumber);
        // bankNumber
        const bankResult = await client.query('SELECT COUNT(*) FROM bank');
        const bankNumber = bankResult.rows[0].count;
        //console.log('Number of banks : ', bankNumber);
        // comparaisonNumber
        //console.log('Number of comparaisons : ', comparaisonNumber);
        // stat construction
        stat = {
            adminNumber: adminNumber,
            annonceNumber: annonceNumber,
            bankNumber: bankNumber,
        }
    }
    catch(err){
        console.error('Error getting stats', err);
    }
    finally{
        console.log('getStat Done');
    }
    return stat;
}

module.exports = {getStatAdmin};