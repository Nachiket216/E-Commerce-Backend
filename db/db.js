const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log("Error connecting to database " + error);
  });
