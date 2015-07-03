'use strict';

var port = process.env.PORT || 3001;

var app	= module.exports = require('ft-next-express')({
	layoutsDir: __dirname + '/../views/layouts'
});

app.get('/__gtg', function(request, response) {
	response.status(200).end();
});

app.get('/', function (request, response) {
	response.send('Hello world.');
});

app.get('/foo', function (request, response) {
	response.render('foo', {
		layout: 'wrapper'
	});
});

module.exports.listen = app.listen(port, function() {
	console.log('Listening on ' + port);
});
