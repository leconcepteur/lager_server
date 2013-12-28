var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '62545',
  key: '6186696886e0a79c983c',
  secret: '9e35216cedc6623651dc'
});

pusher.trigger('my-channel', 'my-event', {"message": "hello world"});
