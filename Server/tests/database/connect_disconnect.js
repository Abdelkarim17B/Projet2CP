const {client} = require('../../models/client');
const {connectDB} = require('../../models/connectDatabase');
const {disconnectDB} = require('../../models/disconnectDatabase');

console.log('Client : ', client);

async function testConnectDisconnect(client){
    try{
        await connectDB(client);
        console.log('Connected to database');
    }
    catch(err){
        console.error('Error connecting to database', err);
    }
    finally{
        await disconnectDB(client);
        console.log('Disconnected from database');
    }
}