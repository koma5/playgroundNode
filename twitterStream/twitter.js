var Twitter = require('twitter');
var config  = require('./config');

var client = new Twitter(config);

var searchTerm = process.argv[2];

var stream = client.stream('statuses/filter', {track: searchTerm});

stream.on('error', function(error){
  throw error;
});

stream.on('data', function(event) {
  console.log(event && event.text);
});
