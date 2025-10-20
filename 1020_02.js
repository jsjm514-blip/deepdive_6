// 노드몬을 껐다가(ctrl+c), 재실행 nodemon 1020_02.js

const a = 13;
const b = 5;


const sum = a + b; /* a와 b를 더한 값 */
const isEven = a % 2; /* a값이 짝수인지, */

console.log(sum);
console.log(isEven);

//sum이라는 함수를 만드는데, x,y 두 값을 더해서, 그 결과값을 리턴하는 함수

function calcSum(x,y) {
    const result = x + y;
    console.log(result) // return result
}

calcSum(3, 5);
calcSum(a, b);
calcSum(10, 15);

// 아이스크림 만들기 함수,
function createIcecream(syrup, topping) {
    const result = `${syrup} ${topping} 아이스크림이 만들어 졌습니다.`;
    console.log(result); //returrn result
}

createIcecream('choco','amond')
createIcecream('vanila','peanut')