//if문 실습 예제

//01
function age(x) {
    if(x>=19){console.log(`성인`)}
    else{console.log(`미성년자`)}
}
age(22)

//02
function num(x) {
    if(x%2===0){console.log(`짝수`)}
    else{console.log(`홀수`)}
}
num(77)

//03
let grade;
function score(x) {
    if(x>=90){console.log(`A등급`)}
    else if (x>=80){console.log(`B등급`)}
    else if (x>=70){console.log(`C등급`)}
    else if (x>=60){console.log(`D등급`)}
    else {{console.log(`F등급`)}}
}
score(88)

//04
const name = "강유민"
if(name==="강유민"){console.log(`강유민님 안녕하세요!`)}
else {`누구세요?`}

//05
function number(num) {
    if(num>0){console.log(`양수`)}
    else{console.log(`음수`)}
}
number(90)

//06
function checkPass(a) {
    if (a === "1234"){console.log(`로그인 완료`)}
    else {console.log(`비밀번호를 다시 입력해주세요.`)}
}
checkPass("1234")

//07


//08
const numbers =[44,36,98]
for(let i=0;i<numbers.length;++i){
    if(numbers[i]%3===0){console.log(`${numbers[i]}는 3의 배수입니다.`)}
    else{console.log(`${numbers[i]}는 3의 배수가 아닙니다.`)}
}
//08_1
let x = 0;
function three(x) {
    if(x%3===0){console.log(`${x}는 3의 배수입니다.`)}
    else{console.log(`${x}는 3의 배수가 아닙니다.`)}
}
three(66)

//
