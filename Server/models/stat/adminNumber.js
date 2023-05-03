const {client} = require('pg')

async function adminNumber(client) {
    try{
        const result = await client.query('SELECT COUNT(*) FROM admin');
        console.log('Number of admins : ', result.rows[0].count);
        return result.rows[0].count
    }
    catch(err){
        console.error('Error getting number of admins', err);
    }
    finally{
        console.log('adminNumber Done');
    }
}

module.exports = {adminNumber};
