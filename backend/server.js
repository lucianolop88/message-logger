const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const messageRoutes = require("./routes/messages");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = app;

if (process.env.NODE_ENV !== "test") {
    app.listen(puerto, () => {
        console.log(`Servidor escuchando en puerto 5000`);
    });
}
