// server.js
var express = require('express');
var cors = require('cors');
var path = require('path');
var serveStatic = require('serve-static');
app.use(cors());
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);