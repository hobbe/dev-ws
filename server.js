/**
 * Development Web Server.
 */
var express = require('express');
var app = express();

app.configure(function() {

	// Logger
	app.use(express.logger());

	// Serve '/' from 'public' folder
	app.use('/', express.static(__dirname + '/public'));
});

console.log('Development Web Server');
// Start listening on port
app.listen(8008);
