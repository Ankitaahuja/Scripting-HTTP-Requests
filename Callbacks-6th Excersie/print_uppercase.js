var https = require('https');
var getHTML = require('../module-5thStep');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
    html = html.toUpperCase();
    console.log(html);

}

getHTML(requestOptions, printUpperCase);
