// restful.js
// p92

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer( function (req, res) {
  switch (req.method) {
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function (chunk) {
        item += chunk;
      });
      req.on('end', function () {
        items.push(item);
        res.end('OK\n');
        console.log(items);
      });
      break;
  }

});

server.listen(3000);

console.log('Server listening in port 3000');
