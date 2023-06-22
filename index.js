const cors = require("cors");
const express = require("express");
const router = require("./router");
const errors = require("./helpers/error");
const connectDatabase = require("./db/db")

require("dotenv").config();

const app = express();
connectDatabase()

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errors);


app.listen(8000, () => {
  console.log("Server started at port 8000");
});
