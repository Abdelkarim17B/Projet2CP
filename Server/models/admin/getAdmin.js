const {Client} = require('pg');

/* Input template */
id_admin = 5 ;

async function getAdmin(client, id){
    try{
        await connectDB(client);
        const result = await client.query(`SELECT * FROM admin WHERE id_admin = ${id}`);
        console.log('Admin fetched!');
        return result.rows[0];
    }
    catch(err){
        console.error('Error fetching admin', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {getAdmin};