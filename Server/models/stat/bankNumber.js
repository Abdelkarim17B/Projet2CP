const {client} = require('pg')

async function bankNumber(client) {
    try{
        const result = await client.query('SELECT COUNT(*) FROM bank');
        console.log('Number of banks : ', result.rows[0].count);
        return result.rows[0].count
    }
    catch(err){
        console.error('Error getting number of banks', err);
    }
    finally{
        console.log('bankNumber Done');
    }
}

module.exports = {bankNumber};