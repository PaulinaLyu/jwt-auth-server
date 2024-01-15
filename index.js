require("dotenv").config();
const express = require("express");
const cors = require("express");
const cookieParser = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
