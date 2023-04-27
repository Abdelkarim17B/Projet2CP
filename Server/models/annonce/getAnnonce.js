const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

/* Input template */
id_annonce = 1;

async function getAnnonce(client, id) {
    try {
        //await connectDB(client);
        const result = await client.query(`SELECT * FROM annonce WHERE id = ${id}`);
        console.log('annonce fetched!');
        return result.rows[0];
    }
    catch (err) {
        console.error('Error fetching annonce', err);
    }
    finally {
        //await disconnectDB(client);
    }
}

module.exports = { getAnnonce };

async function getAllAnnouces(client) 
{
    try 
    {
        const result = await client.query(`SELECT * FROM annonce`);
        console.log('every announce is fetched');
        return result.rows;
    }
    catch(err)
    {
        console.error('Error fetching all annonce', err);
    }

}

module.exports = {getAnnonce,getAllAnnouces};