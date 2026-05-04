require("dotenv").config();
const cors = require("cors");
require("./utils/DB");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postroutes = require("./routes/PostRouter");

app.get("/pagination", (req, res) => {
  res.send("working");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", postroutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
