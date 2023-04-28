const { client } = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

/* Input template */
id_annonce = 1;

async function deleteAnnonce(client, id) {
    try {
       // await connectDB(client);
        await client.query(`DELETE FROM annonce WHERE id = ${id}`);
        console.log('annonce deleted!');
    }
    catch (err) {
        console.error('Error deleting annonce', err);
    }
    finally {
       // await disconnectDB(client);
    }
}

module.exports = { deleteAnnonce };

