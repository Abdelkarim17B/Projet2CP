async function disconnectDB(client){
    try{
      await client.end();
      console.log('Disconnected from PostgreSQL database!');
    }
    catch(err){
      console.error('Error disconnecting from PostgreSQL database', err);
    }
  }

module.exports = {disconnectDB};