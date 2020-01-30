/** @format */

var os = require("os");

console.log("호스트명 : " + os.hostname());
console.log("운영체제의 종류 : " + os.type());
console.log("운영체제의 플랫폼 : " + os.platform());
console.log("아키텍처(비트수) : " + os.arch());
console.log("운영체제의 버전 : " + os.release());
console.log("실행시간 : " + os.uptime());
console.log("로드 에버리지 정보 : " + os.loadavg());
console.log("총 메모리 사용 공간 : " + os.totalmem());
console.log("사용 가능한 메로리 공간 : " + os.freemem());
console.log("사용중인 CPU정보 : " + os.cups);
console.log("네트워크 인터페이스 정보 : " + os.getNetworkInterfaces);
