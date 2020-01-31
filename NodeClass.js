/** @format */

function Class() {
  this.name = "Node base Class";
  this.message;
}

Class.prototype.setMessage = function(msg) {
  this.message = msg;
};

Class.prototype.getMessage = function() {
  return this.message;
};

// 외장객체로 모듈을 내보내겠다.
module.exports = Class;
