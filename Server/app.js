const express = require("express");
const routesClient = require("./routes/client");
const routesAdmin = require("./routes/admin");

const cors = require("cors");

PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
  origin:'*'
}));
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Main route");
});

app.use("/admin", routesAdmin);
app.use("/", routesClient);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
