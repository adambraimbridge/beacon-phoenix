'use strict';

var express = require('ft-next-express');

var port = process.env.PORT || 3001;

var app = module.exports = express();

app.get('/__gtg', function(req, res) {
	res.status(200).end();
});

app.get('/', function (req, res) {
	res.send('Hello world.');
});

module.exports.listen = app.listen(port, function() {
	console.log('Listening on ' + port);
});
