require("dotenv").config();

require("./db/db");

const express = require("express");
const app = express();

const cors = require("cors");

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port " + port);
});