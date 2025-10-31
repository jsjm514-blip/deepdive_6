//Javascript coding-quiz

//01. 두 수의 차이 구하기
function getDiff(x,y) {
    let result = Math.abs(x-y)
    console.log(result)
    return result
}
getDiff(5,10)

//02. 만 나이 구하기
function getAge(year) {
    let now = new Date().getFullYear()
    const age = now - year;
    console.log(`${age}세`)
    return age
}
getAge(2001)

//03. 몫 구하기
function getQuotient(x,y) {
    let result = Math.floor(x/y)
    console.log(result)
    return result
}
getQuotient(15,7)

//04. 배열의 평균값 구하기
const numbers = [3, 5, 10, 2, 6, 7, 9];
// for문
function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i<numbers.length; i++) {
    sum += numbers[i];
    }
    const average = sum/numbers.length
    return average;
}
console.log(getAverage(numbers)) //6

//reduce문
function getAverage1 (numbers) {
    const sum = numbers.reduce((acc,cur)=>
        acc+cur,0)
    const average = sum/numbers.length;
    return average;
}
console.log(getAverage1(numbers))
