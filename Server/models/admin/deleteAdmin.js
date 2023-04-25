const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

/* Input template */
id_admin = 5 ;

async function deleteAdmin(client, id){
    try{

        await connectDB(client) ;

        await client.query(`DELETE FROM admin WHERE id_admin = ${id}`);
        console.log('Admin deleted!');
    }
    catch(err){
        console.error('Error deleting admin', err);
    }

    finally{
        await disconnectDB(client) ;
    }

}

module.exports = {deleteAdmin};

