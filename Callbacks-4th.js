var https = require('https');

function getHTML (options, callback) {
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
};
function callbackFunc (html) {
    console.log(html);
};
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


console.log(getHTML(requestOptions,callbackFunc));