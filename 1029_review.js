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