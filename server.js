// TODO: connect database
// TODO: Init server

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

connectDB;
const app = express();
const port = process.env.PORT | 1001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, (req, res) => {
  console.log(`App listen on port: ${port}`);
});
