/** @format */

// 이전 파일 : sever_get.js

var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content=Type": "text" });
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head><meta charset='utf-8'> <title>웹연습</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<p>여기는 문서입니다.</p>");
  response.write("</body>");
  response.write("</html>");
  response.end("");
});

server.listen(8080, function() {
  console.log("Server is Connecting.....");
});
