const {client} = require('pg');

/* Input template */
id_admin = 5 ;

async function getAdmin(client, id){
    try{
        const result =  await client.query(`SELECT * FROM admin WHERE id_admin = ${id}`);
        console.log('Admin fetched!');
        return result.rows[0];
    }
    catch(err){
        console.error('Error fetching admin', err);
    }
}

module.exports = {getAdmin};