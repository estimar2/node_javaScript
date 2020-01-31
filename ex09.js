/** @format */

// querystring 모듈객체 : 나누기도 가능, 합치기도 가능

var url = require("url");
var qs = require("querystring");
var paredURL = url.parse("https://api.jquery.com/addClass/");

var objQuery = qs.parse(paredURL.query); // 파싱한 값을 객체의 더 세부적인 속성으로 나누어 저장

var strQuery = qs.stringify(objQuery); // 객체의 속성으로 나누어진 값을 하나의 문자열로 조합

console.log(paredURL); // 파싱한 url 데이터를 출력
console.log(objQuery);
console.log(strQuery); // 객체에서 하나의 문자열로 조합된 결과 출력
