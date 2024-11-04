require("dotenv").config({ path: "./.env" });

require("./db/db.connect");

const express = require("express");
const app = express();

const cors = require("cors");

const { productRouter, categoryRouter } = require("./routes/index");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port " + port);
});
