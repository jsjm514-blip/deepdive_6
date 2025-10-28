// 배열
const animals = ['dog', 'cat', 'rabbit', 'tiger', 'lion']

for(let animal of animals) {
    console.log(animal);
}

for(let i = 0; i <animals.length; i++){
    console.log (animals[i]);
}

console.clear(); //공부할때 사용하기 좋음

animals.forEach((animal,idx) => {
    if (idx === 3) {
    console.log(`${idx}. ${animal}`);
    }
});

const numbers = [10,20,30,40,50]
// 1. forEach 구문으로 40이상의 숫자만 출력
numbers.forEach((num) => {
    if (num >= 40) {
        console.log(num);
    }
});
// 2. 40이상의 인덱스 번호만 출력
numbers.forEach((num,idx) => {
    if (num >= 40) {
        console.log(idx);
    }
});
// 3. words에서 글자수가 6자 이상인 단어만 출력, length 사용
const words = ['hamburger','milk','coffee', 'juice','chocolate cookie']

words.forEach((word) => {
    if (word.length >= 6) {
        console.log(word);
    }
});