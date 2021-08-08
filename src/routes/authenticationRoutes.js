//TODO: Add task routes for CRUD operations on authentication
var express = require('express');
var router = express.Router();

/* GET request Canvas access */
router.get('/', function(req, res) {
  console.log(req, res);
  res.send("GET method completed");
})