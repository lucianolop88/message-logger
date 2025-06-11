const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const messageRoutes = require("./routes/messages");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  });

module.exports = app;
