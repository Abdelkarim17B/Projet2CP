const express = require('express');
PORT = process.env.PORT || 3000;
const {client} = require('../models/client');
const { connectDB } = require('../models/connectDatabase');

const app = express();

connectDB(client);

app.get('/', (req, res) => {
  res.send('Main route');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});