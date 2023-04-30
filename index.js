const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./categories.json");
const news = require("./news.json");

app.get("/", (req, res) => {
  res.send("Dragon news is coming");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
////all news data here
app.get("/news", (req, res) => {
  res.send(news);
});
// specific id news find
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const findData = news.find((n) => n._id === id);
  res.send(findData);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (parseInt(id) === 0) {
    res.send(news);
  } else {
    const categoriesNews = news.filter((n) => n.category_id === id);
    res.send(categoriesNews);
  }
});

app.listen(port, () => {
  console.log(`dragon news running on port: ${port}`);
});
