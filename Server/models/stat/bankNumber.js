const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function bankNumber(client) {
    try{
        await connectDB(client);
        const result = await client.query('SELECT COUNT(*) FROM bank');
        console.log('Number of banks : ', result.rows[0]);
        return result.rows[0]
    }
    catch(err){
        console.error('Error getting number of banks', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {bankNumber};