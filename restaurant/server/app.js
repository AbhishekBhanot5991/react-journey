const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//Mongodb connection(replace with your local Mongodb connection url)
mongoose.connect(
  "mongodb+srv://admin:iUdnRF5O6KZcXIS7@cluster0.76ssyth.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Corrected option name
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", () => {
  console.log("Connected to local MongoDB");
});

//Define routes
const yourRoutes = require("./routes/yourRoutes");
app.use("/api", yourRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
