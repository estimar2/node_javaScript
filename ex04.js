/** @format */

let i = 0;

while (i < 50) {
  console.log("현재 i의 값은 ? " + i);
  i += 2; // i=i+2
}

var sum = 0;
for (var l = 0; l < 50; l += 2) {
  sum += l; // sum=sum+i
  console.log("현재 까지의 더한 결과는 ? : " + sum);
}
