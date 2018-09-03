var getHTML = require('./module-5thStep');

function callbackFunc (html) {
    console.log(html);
};
 var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
 };



console.log(getHTML(requestOptions,callbackFunc));