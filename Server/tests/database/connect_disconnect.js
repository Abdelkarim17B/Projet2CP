const {client} = require('../../models/client');
const {connectDB} = require('../../models/connectDatabase');
const {disconnectDB} = require('../../models/disconnectDatabase');

connectDB(client);

// disconnectDB(client);