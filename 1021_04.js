// for..of 구문
//01
const animals1 = ["cat","giraffe","puppy","tiger","rabbit"];

for (const animal of animals1) {
    console.log(animal);
}

//02
const fruits = ["apple", "banana", "cherry", "orange", "melon"];

for (const fruit of fruits) {
  console.log(fruit);
}

//03
const numbers = [7, 15, 30, 58]
let sum = 0

for (const number of numbers) {
    sum = sum + number
}
console.log(`숫자의 총 합은 ${sum}입니다.`)

//04
const scores = [90, 86, 76, 45, 66]

for (const score of scores){
    if (score >= 80) {console.log(`${score}점은 합격이다.`)}
    else {console.log(`${score}점은 불합격이다.`)}}

//05
const nums = [7, 15, 22, 30, 46]

for (const num of nums) {
    if (num % 2 === 0) {
        console.log(`${num}은 짝수이다.`)
    }
}

//for반복문
//01
const numbers1 = [3, 17, 21, 30, 9]
let result = 0;
for (let i = 0; i < 5; i++) {
  result = result + numbers1[i];
}
console.log(`${numbers1}의 총 합은 ${result} 입니다.`)

//02
const animals = ["cat","giraffe","puppy","tiger","rabbit"];
for (let i = 0; i<5; i++) {
    let print = `${i+1}. ${animals[i]}`;
    console.log(print);
}

//03
for (let i = 1; i<=10; i++) {
    if (i % 2 === 0)
    console.log(`${i}는 짝수입니다.`)
}

//04
const age = [11,18,23,29,30]
for (let i = 0; i<5; i++) {
    if ( i > 19 ) {result = "성인"}
    else {result = "미성년자"}
    console.log(`${age[i]}세는 ${result}입니다.`);
}
//05
const address = ["서울","대전","인천","부산"]
for (let i = 0; i<4; i++) {
    if (address[i] === "서울" || address[i] === "인천") {result = "수도권"}
    else {result = "비수도권"}
    console.log(`${address[i]}은 ${result}`)
}

