async function disconnectDB(client){
    try{
      await client.end();
      console.log('Disconnected from admin PostgreSQL database!');
    }
    catch(err){
      console.error('Error disconnecting from admin PostgreSQL database', err);
    }
  }

module.exports = {disconnectDB};