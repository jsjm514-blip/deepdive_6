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