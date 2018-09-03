// while https is built-in to Node, it is a module, so it must be required
var https = require('https');                               


function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

https.get(requestOptions, function (response) {
    response.on('data', function (data, response) {
        console.log('Chunk Received. Length:', data.length);
        console.log('Data:', data + '\n');
      });
    
    response.on('end', function() {
        console.log('Response stream complete.');
    });
  });
}
getAndPrintHTMLChunks();