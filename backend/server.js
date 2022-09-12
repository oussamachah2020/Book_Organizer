const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connect = require("./db/connect");
const PORT = process.env.PORT || 8000;
const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routers/userRouter"));
app.use("/api/books", require("./routers/bookRouter"));

app.listen(
  PORT,
  console.log(
    `App running on port:` + ` http://localhost:${PORT}`.cyan.underline.blue
  )
);
