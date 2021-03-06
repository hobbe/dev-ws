/*!
 * Development Web Server.
 *
 * Copyright (c) 2013 Olivier Bagot (http://github.com/hobbe/dev-ws)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * http://opensource.org/licenses/MIT
 *
 */

'use strict';

var express = require('express');
var app = express();

var config = require('./config.json');

console.log('** Development Web Server **');

app.configure(function() {

	// Logger
	app.use(express.logger());

	var fs = require('fs');
	fs.exists(config.server.location, function(exists) {
		if (exists) {
			// Serve '/' from config.server.folder
			app.use('/', express.static(config.server.location));
			console.log('Serving files from folder ' + config.server.location);
		} else {
			// Serve '/' from local sub-folder named from config.server.folder
			app.use('/', express.static(__dirname + '/' + config.server.location));
			console.log('Serving files from ' + __dirname + '/' + config.server.location);
		}
	});
});

// Start listening on port
console.log('Started on http://localhost:' + config.server.port);
app.listen(config.server.port);
