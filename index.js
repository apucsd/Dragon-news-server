const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./categories.json");
app.get("/", (req, res) => {
  res.send("Dragon news is coming");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`dragon news running on port: ${port}`);
});
