const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/bookmydoctor")
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Welcome to Book My Doctor Backend");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});