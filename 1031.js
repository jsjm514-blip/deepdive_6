// 함수선언식, 함수표현식

// 1. sum() 함수(두 수의 합을 반환)를 함수 선언식
function sum(a, b) {
    let result = a+b
    console.log(`sum:${result}`)
    return result;
}

// 2. div() 함수(두 수의 나눈값의 몫을 반환)를 함수 표현식으로 만드세요 (fuction 사용)
function div(x,y) {
    let result =  Math.floor(x/y);
    console.log(`div:${result}`)
}

// 3. remainer() 함수 (두수의 나눈값이 나머지값을 반환)를 함수 표현식으로 만드세요(arrow function 사용)
const remainder = (x, y) => {
    let result = x%y;
    console.log(`remianer:${result}`)
    return result
}
sum(5,8)
div(10,3)
remainder(10,8)

