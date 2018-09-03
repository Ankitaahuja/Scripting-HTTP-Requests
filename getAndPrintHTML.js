function getAndPrintHTML () {

    const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    
    https.get(requestOptions, function (response) {
        let buffer;
        response.on('data', function (data, response) {
            // console.log('Chunk Received. Length:', data.length);
            console.log('Data:', data + '\n');
            buffer = buffer + data;
            console.log(buffer);
          });
        
        response.on('end', function() {
            console.log('Response stream complete.');
        });
   
    })
  };

  console.log(getAndPrintHTML());