var Pusher = require('pusher');

var pusher = new Pusher({
  appId: 'APP_ID',
  key: 'APP_KEY',
  secret: 'APP_SECRET'
});

pusher.trigger('my-channel', 'my-event', {"message": "hello world"});
