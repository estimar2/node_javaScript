/** @format */

// fs 모듈객체

var fs = require("fs");
var TIMO = "HELLO TIMO 안녕 티모";

fs.writeFile("test.txt", TIMO, "uft-8", function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("파일이 정상적으로 생성되었습니다.");
  }
});

fs.readFile("test.txt", "utf-8", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
