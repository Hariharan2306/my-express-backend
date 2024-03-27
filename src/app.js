const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const { connectDatabase } = require("./database/connection.js");
const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();
app.use(cors());

app.options("*", cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.json());
connectDatabase();
app.use("/", routes);
app.listen(4000, () => {
  console.log(`Express is listening at PORT:${4000}`);
});
