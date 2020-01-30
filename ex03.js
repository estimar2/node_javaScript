/** @format */

let a = 10;

if (a > 11) {
  console.log("a가 11보다 크다.");
} else if (a == 11) {
  console.log("a가 11과 같다.");
} else {
  console.log("a가 11보다 작다.");
}

const blood = 2;
switch (blood) {
  case 0:
    console.log("당신의 혈액형은 O형입니다.");
    break;
  case 1:
    console.log("당신의 혈액형은 A형입니다.");
    break;
  case 2:
    console.log("당신의 혈액형은 AB형입니다.");
    break;
  case 3:
    console.log("당신의 혈책형은 B형입니다.");
    break;
  default:
    console.log("너는 누구냐");
}
