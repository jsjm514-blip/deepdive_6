const numbers = [3, 17, 21, 30, 9,]
let result = 0;
for (let i = 0; i < 5; i++) {
  result = result + numbers[i];
}
console.log(`${numbers}의 총 합은 ${result} 입니다.`)

// length 길이 구하기
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(`${numbers}의 총 합은 ${result} 입니다.`) 

const str = "Hello World";
console.log(str.length)