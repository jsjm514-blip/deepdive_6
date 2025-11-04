//for문 기초 퀴즈

//01
for (let i =1; i<6; i++) {
    console.log(i);
}

//02
const arr1 = [10, 20, 30];
for (const ar of arr1) {
    console.log(ar);
}

//04
const arr2 = [1, 2, 3];
arr2.forEach (x => {
    console.log(x*2);
})

//05
for (let i=0;i<=10;++i) {
    if (i % 2 === 0)
    {console.log(i)}
}

//06
const str = 'abc';
for (const st of str) {
    console.log(st);
}

//08
const arr3 = ['a', 'b', 'c'];
arr3.forEach((x,idx)=>{
    console.log(`${idx+1}.${x}`);
})

//09
for(let i=5; i>=1; i--) {
    console.log(i)
}

//10
const arr4 = ['a', 'b', 'c'];
arr4.forEach(x =>console.log(x.toUpperCase()));


//for문 실전 퀴즈

//01
const arr5 = [1, 2, 3, 4, 5];
let sum = 0;
for(let i=0; i < arr5.length; i++) {
  sum += arr5[i];
}
console.log(sum);

//02
const arr6 = [7, 2, 9, 4];
let max = arr6[0];
for(const a of arr6) {
    if (a>max) max=a;
}
console.log(max)

//03
const arr7 = [1, 2, 3, 4, 5, 6];
let x = 0
arr7.forEach(x=>{
    if(x%2===0){console.log(x)}
})


//for문 심화 퀴즈

//04
const users = [
  { name: 'Ghost', age: 20 },
  { name: 'Camel', age: 21 }];

users.forEach(u=> {
    if(u.age>=21){console.log(u.name)}
})

//for문 고급 퀴즈

//01
for(let i=1;i<=100;i++) {
    if(i%3===0 && i%5===0){console.log(i)}
}