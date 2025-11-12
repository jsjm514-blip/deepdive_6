//Function 연습퀴즈 1
//01
function add (a,b) {
    return a+b;
}
console.log(add(2, 3));

//02
function multiply (a,b) {
    return a*b
}
console.log(multiply(2, 3));

//03
function subtract (a,b) {
    return a-b
}
console.log(subtract(2, 3));

//04
function add1(a,b=10){
    return a+b
}
console.log(add1(2));

//05
function greet (name) {
    return `Hello,${name}!`;
}
console.log(greet("유민"))

//06
function sum (a,b) {
    return a+b;
}
console.log(sum(3,7))

//07 -> setTimeout에 대해 공부하기
setTimeout(function() {
    console.log("Hello");
}, 1000);

//08 -> callback에 대해 공부하기
function printTwice(callback) {
    callback();
    callback();
}
printTwice(function() {console.log("Hi");});

//09
function makeArray(a,b) {
    return[a,b]
}
console.log(makeArray(1, 2));

//10
function makePerson(name,age) {
    return {name: name,age: age}
}
console.log(makePerson("Jane", 20));

console.clear();

//Function 연습퀴즈 2
//01
function isEven(a){
    return a%2===0;
}
console.log(isEven(4));

//02 -> 이거 생각치도 못함
function sumToN (n){
    let sum =0;
    for (let i=0;i<=n;i++) {
        sum += i
    }
    return sum
}
console.log(sumToN(5));

//03
function sumArray(a) {
    return a.reduce((acc,cur)=>acc+cur,0)
}
console.log(sumArray([1,2,3]));

//04
function max(a) {
    
}