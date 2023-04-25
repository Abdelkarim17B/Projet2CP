const {Client} = require('pg');

/* Input template */
id_admin = 5 ;

async function deleteAdmin(client, id){
    try{
        await client.query(`DELETE FROM admin WHERE id_admin = ${id}`);
        console.log('Admin deleted!');
    }
    catch(err){
        console.error('Error deleting admin', err);
    }
}

module.exports = {deleteAdmin};

