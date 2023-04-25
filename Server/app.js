const express = require("express");
const routes = require("./routes/client");
const cors = require("cors");

PORT = process.env.PORT || 3000;
const { client } = require("./models/client");
const { connectDB } = require("./models/connectDatabase");

const app = express();
app.use(cors());

connectDB(client);

app.get("/", (req, res) => {
  res.send("Main route");
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
