var https = require('https'); 
function getAndPrintHTML (options) {

    https.get(requestOptions, function (response) {
        let buffer;
        response.on('data', function (data, response) {
            buffer = buffer + data;
            
          });
        
        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(buffer);
        });
   
    })
  
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
  console.log(getAndPrintHTML(requestOptions));