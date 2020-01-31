/** @format */

var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content=Type": "text" });
});

server.listen(8080, function() {
  console.log("Server is Connecting.....");
});
