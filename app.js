const cors = require("cors");
const express = require("express");
const app = express();
const colorsController = require('./controller/colorsController')

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/colors', colorsController)
// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Colors App");
});
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
// EXPORT
module.exports = app;