/** @format */

// url 모듈객체 : url을 나누어줌

var url = require("url");
var parsedURL = url.parse("https://api.jquery.com/addClass/");

console.log(parsedURL);
console.log("프로토콜 : " + parsedURL.protocol);
console.log("사이트 : " + parsedURL.host);
console.log("경로 : " + parsedURL.path);
