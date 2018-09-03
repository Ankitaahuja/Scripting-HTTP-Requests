var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    var buffer;
    response.on('data', function (data) {
      buffer = buffer + data;
    });


    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);
    });

  });
}