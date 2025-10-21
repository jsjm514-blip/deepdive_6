const animals = ["cat","giraffe","puppy","tiger","rabbit"];
console.log(animals[2]);

for (const animal of animals) {
    console.log(animal);
} 
// for -변수초기화- of -슨회가능한 구문- : 구문 반복이가능한 데이터타입을 배열순회하는 용도

/*
for(초기화 ; 조건식(boolean값) ; 증감식) {
    실행문
}
    */

// 1~5까지 출력
for(let i=1; i<=5; i++) {
    console.log(i)
}

/* let a = 1;
a = a + 1; // 2
a = a + 1; //3

a += 1 //4
a += 3 // a= a+3
a ++ */

for (let i = 0; i<5; i++) {
    let print = `${i+1}. ${animals[i]}`;
    console.log(print);
}