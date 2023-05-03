const {client} = require('pg')

async function annonceNumber(client) {
    try{
        const result = await client.query('SELECT COUNT(*) FROM annonce');
        console.log('Number of annonces : ', result.rows[0].count);
        return result.rows[0].count
    }
    catch(err){
        console.error('Error getting number of annonces', err);
    }
    finally{
        console.log('annonceNumber Done');
    }
}

module.exports = {annonceNumber};