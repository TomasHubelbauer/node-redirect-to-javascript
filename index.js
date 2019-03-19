const http = require('http');

http.createServer(function (request, response) {
  response.writeHead(302, { 'Location': 'javascript:alert("Hi!")' });
  response.end();
}).listen(8080);
console.log('Listening on 8080');
