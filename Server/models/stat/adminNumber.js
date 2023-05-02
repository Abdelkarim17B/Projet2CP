const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function adminNumber(client) {
    try{
        await connectDB(client);
        const result = await client.query('SELECT COUNT(*) FROM admin');
        console.log('Number of admins : ', result.rows[0]);
        return result.rows[0]
    }
    catch(err){
        console.error('Error getting number of admins', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {adminNumber};
