const express = require("express");
const routes = require("./routes/client");
const cors = require("cors");

PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());;

app.get("/", (req, res) => {
  res.send("Main route");
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
