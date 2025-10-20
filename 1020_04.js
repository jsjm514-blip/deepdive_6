function rectangle(width, height) {
    const size = width * height;
    console.log(`사각형의 크기는 ${size} 입니다.`);
}
rectangle(10, 5);

function getAverage(a,b,c) {
    const average = (a+b+c)/3;
    console.log(`당신의 평균점수는 ${average}점 입니다.`);
}
getAverage(90,86,70)

function getCircleArea(r) {
    const A = r * r * 3.14;
    console.log(`반지름이 ${r}cm인 원의 넓이는 약 ${A}cm2 입니다.`)
}
getCircleArea(3)

function calcDiscount(x,y) {
    const result = x * (1-y/100);
    console.log(`원래가격 ${x}원에서 ${y}%할인되어, 최종가격은 ${result}원 입니다.`)
}
calcDiscount(10000, 10)

function getRemainder(num1,num2) {
    const result = num1 % num2;
    console.log(`${num1}를 ${num2}로 나눈 나머지는 ${result} 입니다.`)
}
getRemainder(54,7) 

function getRectPerimeter (h,w) {
    const result = (h * 2)+(w * 2);
    console.log(`가로 ${h}cm, 세로 ${w}cm인 사각형의 둘레는 ${result}cm 입니다.`)
}
getRectPerimeter (20,7)

function  checkPass (score) {
    const result = score >= 60 ? "합격" : "불합격"
    console.log(`${score}점은 ${result}입니다.`)
}
checkPass (86)


const area = "서울";

function canJoinEvent(age,locate) {
    const result = age >= 20 && locate === area ? "가능" : "불가능"
    console.log(`${age}세, ${locate}거주자인 당신은 이벤트 참여가 ${result}합니다.`)
}
canJoinEvent(26,"대전")

function canWatchMovie (age,parent) {
    const ox = parent ? "O" : "X"
    const result = age <= 15 && parent ? "관람가능" : "관람불가"
    console.log(`나이 ${age} 세, 보호자동반${ox}는 ${result}입니다.`)
}
canWatchMovie (13, true)

function isWeekend (x) {
    const z = x === "토" || x === "일" ?  "주말" : "평일"
    console.log(`입력하신 ${x}요일은 ${z}입니다.`)
}
isWeekend ("수")