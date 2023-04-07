const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = require("./config/server.config");
const dotenv = require("dotenv").config();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use;

app.use("/", require("./routes/index"));
if (process.env.NODE_ENV === "production") { 
  app.use(express.static(path.join(__dirname, "../capstone/build")));
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../capstone/build/index.html"));
  });
}

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@capstone-group-project.1yvi8j1.mongodb.net/?retryWrites=true&w=majority`;

async function connectDB() {
  try { 
    await mongoose.connect(url);
    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
  }
}

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
