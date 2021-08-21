'use strict';
var express = require('express');
var bodyParser = require("body-parser");
var http = require('http');
var cors = require('cors');
var setApplicationRoutes = require('./routes.js');
const port = 3000;

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setApplicationRoutes(app);
var server = http.createServer(app);


server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}).on('error', function (err) {
    console.log("error:",err);
});

module.exports = server;
