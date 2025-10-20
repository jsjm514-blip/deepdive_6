// 삼항연산자
// __1__ ? __2__ : __3__
// 조건식 ? 참일때 실행문 : 거짓일때 실행문

const a = 5;
const result = (a % 2) === 0 ? "짝수" : "홀수";
console.log(result)

//a가 10보다 큰지, 작은지 판별하는 식
//b는 10보다 크다, b는 10보다 작다.
const b = 12;
const result2 = b > 10 ? "b는 10보다 크다" : "b는 10보다 작다";
console.log(result2)

// 내가 입력한 수가 10보다 큰지를 매번 판별

function rectangle(width, height) {
    const size = width * height;
    console.log(`사각형의 크기는 ${size} 입니다.`);
}
rectangle(10, 5);

function isAdult(age) {
    const result = age >= 20 ? "성인입니다" : "미성년자입니다";
    console.log(`hogilldong님은 ${result}`);
}
isAdult(23);

function getAverage(a,b,c) {
    const average = (a+b+c)/3;
    console.log(`당신의 평균점수는 ${average}점 입니다.`);
}
getAverage(90,86,70)


const id = "ghost";
const pw = "1234";

function checkLogin(userId, userPw) {
  const result = userId === id && userPw === pw ? "로그인 성공" : "로그인 실패";
  console.log(result);
}

checkLogin("ghost", "1234")