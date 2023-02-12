const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const noteRoute = require("./routes/note-route");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/note", noteRoute);
mongoose
  .connect("mongo")
  .then(() => {
    app.listen(5000);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
