const numbers = [32,30,5,12,0,45]
const str = 'Hello, World'
//01 홀수만 출력하기
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1)
    console.log(`${numbers[i]}는 홀수입니다.`);
}

//02 길이 출력하기
console.log(str.length)

//03 총합 구하기
let result = 0;
for (let i = 0; i < 6; i++) {
    result = result + numbers[i]
}
console.log(`총합은 ${result}입니다.`)