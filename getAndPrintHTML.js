var https = require('https'); 

function getAndPrintHTML () {

    const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    
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
  };

  console.log(getAndPrintHTML());