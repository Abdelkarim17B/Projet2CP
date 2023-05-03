const {connectDB} = require('./connect');
const {disconnectDB} = require('./disconnect');

async function conncetionTest(){
    const client = await connectDB();
    try{
        console.log('Connection test passed!');
        console.log('Client : ', client.connectionParameters);
    }
    catch(err){
        console.error('Error testing connection', err);
    }
    finally{
        await disconnectDB(client);
    }
}

conncetionTest();