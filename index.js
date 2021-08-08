const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const mongoHost = require('./config/mongoConfig').HOST;

const PORT = process.env.PORT || 3000;
const dir = path.resolve(__dirname, "./client/build");

const app = express();
mongoose.connect(mongoHost, {useNewUrlParser: true})
    .then(() => console.log("Connected to db"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(dir));

app.get('*', (req, res) => {
    res.sendFile("index.html");
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})
