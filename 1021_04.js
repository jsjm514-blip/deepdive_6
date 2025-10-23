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
    else {console.log(`${score}점은 불합격이다.`)}
}

//05
const nums = [7, 15, 22, 30, 46]

for (const num of nums) {
    if (num % 2 === 0) {
        console.log(`${num}은 짝수이다.`)
    }
}

//for구문
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