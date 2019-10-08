const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./controllers/productController");

const app = express();

const PORT = 4000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.post("/createProduct", productRoutes.createProduct);

mongoose
  .connect(
    "mongodb+srv://dbadmin:Password123@experiment-yw6rd.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(4001);
    console.log("Successfully Connected.");
  })
  .catch(err => {
    console.log(`Ooops! Error: ${err}`);
  });

app.listen(PORT);
