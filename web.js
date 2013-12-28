var Pusher 		= require('pusher');
var http 		= require('http');
var socketId 	= null;

var pusher = new Pusher({
  appId: '62545',
  key: '6186696886e0a79c983c',
  secret: '9e35216cedc6623651dc'
});

http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('_testcb(\'{"message": "Hello world from Heroku!"}\')');
}).listen(80);

pusher.connection.bind('connected', function() {
    socketId = pusher.connection.socket_id;
});

pusher.trigger('my-channel', 'my-event', {"message": "Hello world from Pusher!"});
