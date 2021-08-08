const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// const mongoHost = require('./config/mongoConfig').HOST;
// const authRouter = require('./src/routes/authenticationRoutes');
// const http = require("http");

const PORT = process.env.PORT || 3000;
const dir = path.resolve(__dirname, "./client/build");

const app = express();
// mongoose.connect(mongoHost, {useNewUrlParser: true})
//     .then(() => console.log("Connected to db"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(dir));

app.get('/auth1', function(req, res) {
    // const response = http.request("https://<canvas-install-url>/login/oauth2/auth?client_id=XXX&response_type=code&redirect_uri=http://localhost:3000")
    console.log(req)
    res.send("GET method completed");
});
app.get('*', (req, res) => {
    res.sendFile("index.html");
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})

module.exports = app;