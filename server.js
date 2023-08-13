const useNewUrlParser = require("express");
const express = require("express");
const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/jobportal";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());

// Define your routes and other server configurations here

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


