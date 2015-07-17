// Include the express package for easily handle REST requests.
// Get the app object from express so that we can create us a
// small websierver. Include the body parser module for express
// to let us parse incoming requests as json and let ut do things
// like req.params.name.
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

// Create a http GET handler for /greeter/:name that
// responds with a json containing a greeting for that
// person.
app.get('/greet/:name', function(req, res) {
    res.send({ 'greeting': 'Hello '+req.params.name+'!!' });
});

// Tell the webserver where the client files are.
var clientPath = path.join(__dirname, '..', 'client', 'build')
app.use(express.static(clientPath));
// Tell the webserver to use json as parser.
app.use(bodyParser.json()); 

// Tell the webserver which port it should listen on and
// start it.
var port = 4000;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
