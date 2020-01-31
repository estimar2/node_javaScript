/** @format */

function Class(msg) {
  this.name = "I am TIMO";
  this.message = msg;
  message2 = "find me";
}

Class.prototype.getMeaasge = function() {
  return this.message;
};
Class.prototype.getMeaasge2 = function() {
  return this.message2; // message2는 멤버 변수가 아니므로 this에 대한 로딩이 안됨
};

var myClass = new Class("GOOD");
// console.log(myClass.getMeaasge());
console.log(myClass.getMeaasge2()); //내부 변수에 의한 방법 실행되지 않음
