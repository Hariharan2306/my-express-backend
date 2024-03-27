const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

dotenv.config();

const app = express();
app.use(cors());

app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// connectDatabase();
app.use("/", routes);
app.listen(4000, () => {
  console.log(`Express is listening at PORT:${4000}`);
});
