// Include the index css file to our bundle
require('./styles/index.css');

// Reference jquery installed through npm as $
var $ = require('jquery');

// Get the greeting from the server and print it inside
// the greeter div
$.get('/greet/Joan', function (res) {
    $('#greeter').text(res.greeting);
});

