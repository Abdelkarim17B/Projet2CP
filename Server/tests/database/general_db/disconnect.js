async function disconnectDB(client){
    try{
      await client.end();
      console.log('Disconnected from general PostgreSQL database!');
    }
    catch(err){
      console.error('Error disconnecting from general PostgreSQL database', err);
    }
  }

module.exports = {disconnectDB};