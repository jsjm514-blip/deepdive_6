const numbers = [32,30,5,12,0,45]
//for문 이용해서 numbers의 모든 숫자를 console에 찍기
for (let i = 0; i < numbers.length; i++) {
    //홀수만 출력
    if (i % 2 === 1)
    console.log(`${numbers[i]}는 짝수입니다.`);
}