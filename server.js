// The server file
'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'build')));


app.listen(8080, function() {
	console.log('Server is running: http://localhost:8080/');
});