require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("express");
const cookieParser = require("express");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  console.log(1);
  try {
    console.log(2);
    await mongoose.connect(process.env.DB_URL);
    console.log(3);
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
