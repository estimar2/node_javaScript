/** @format */

// u
function Class(msg) {
  this.name = "Iam a Class"; // 맴버 변수
  this.message = msg; // 맴버 변수
  message2 = "find me"; //내부 변수
  this.print = function() {
    // 맴버메서드
    console.log(message2);
  };
}

var myClass = new Class("good news sucess");
console.log(myClass.name);

myClass.name = "My name is TIMO";
console.log(myClass.name); // 정상
console.log(myClass.message); //정상
console.log(myClass.message2); // 오류 - 내부 변수는 호출불가이므로 메서드에서 실행해야 함.
myClass.print();
