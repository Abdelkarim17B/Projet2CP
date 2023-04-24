const express = require('express');
const routes = require('./routes/client');

PORT = process.env.PORT || 3000;

const { client } = require('./models/client');
const { connectDB } = require('./models/connectDatabase');
const { disconnectDB } = require('./models/disconnectDatabase');

const app = express();

//  console.log('Client : ', client);

//  connectDB(client);

//  disconnectDB(client);

app.get('/', (req, res) => {
  res.send('Main route');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
