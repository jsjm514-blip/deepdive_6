// Morning Mission 1 - 나머지수 구하기

function getRest(num1, num2) {
    let result = num1 % num2;
    return result;
}

console.log(getRest(3,2));
console.clear()
// Mission 2 - numbers에서 짝수만 출력하시오 
const numbers =[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numbers.length; i++) {
    if (!(numbers[i] % 2)) {
        console.log(numbers[i]);
    }
}
console.clear()

// Mission 3 - 주어진 수 이하의 짝수의 합을 구하시오.
// 주어진 수 이하의 짝수값만 출력 -> 추출한 짝수값을 모두더해서 최종 더한 값을 출력
function getSumEven(number) {
    let sum = 0;
    for ( let i = 0; i <=number; i++) {
        if (i%2===0)
            sum = sum + i;
    }
    return sum;
}

console.log(getSumEven(10))
console.log(getSumEven(7))
console.log(getSumEven(20))