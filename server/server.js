const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use;

const PORT = 3001;

app.use("/", require("./routes/index"));

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});

module.exports = app;
