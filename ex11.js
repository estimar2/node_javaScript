/** @format */

// crypto 모듈 객체 : 암호화와 관련된 모듈

var crypto = require("crypto");

const secret = "abcdefg";

const hash = crypto
  .createHmac("sha256", secret)
  .update("Go to Sleep")
  .digest("hex");

console.log(hash);
