const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function annonceNumber(client) {
    try{
        await connectDB(client);
        const result = await client.query('SELECT COUNT(*) FROM annonce');
        console.log('Number of annonces : ', result.rows[0]);
        return result.rows[0]
    }
    catch(err){
        console.error('Error getting number of annonces', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {annonceNumber};