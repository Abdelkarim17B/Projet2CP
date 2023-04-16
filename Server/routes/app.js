const express = require('express');
PORT = process.env.PORT || 3000;
//const { client, connectDB } = require('../models/connectDatabase');
//const {createTables} = require('../models/createDatabase');

const app = express();

//connectDB();

app.get('/', (req, res) => {
  res.send('Main route');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});