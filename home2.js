/** @format */

var http = require("http");
var url = require("url");
var fs = require("fs");

var sercer = http.createServer(function(req, res) {
  var parsedURL = url.parse(req.url);
  var resource = parsedURL.pathname;
  //http://127.0.0.1/hello라고 입력했다면

  if (resource == "/hello") {
    fs.readFile("hello.html", "utf-8", function(error, data) {
      if (error) {
        //서버 오류
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("500 Server Error is" + error);
      } else {
        //정상작동
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html><head>");
    res.write("<meta charset = 'utf-8'></head>");
    res.write("<body>요청하신 페이지가 존재하지 않습니다.</body>");
    res.write("</html>");
    res.end();
    console.log("요청하신 페이지가 존재하지 않습니다.");
  }
});

// server.listen(80, function() {
//   console.log("서버가 작동하였습니다.");
// });
