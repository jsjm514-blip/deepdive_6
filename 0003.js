//Array 연습퀴즈 1

//01 -> filter(콜백): 조건에 맞는 요소만 추출
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.filter(x => x%2===0))

//02 -> map(콜백): 각 요소를 변환한 새 배열을 만듦
const arr2 = [1, 2, 3, 4];
console.log(arr2.map(x=>x*x))

//03 -> sort(비교함수): 배열을 정렬
const arr3 = [5, 2, 9, 1];
console.log(arr3.sort((a,b)=>b-a))

//04 -> reduce(콜백, 초기값): 누적 계산
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reduce((acc,cur)=>acc+cur,0))

//05 -> find(콜백):조건에 맞는 첫번째 값 반환
const arr5 = [3, 7, 12, 5, 20];
console.log(arr5.find(x => x > 10));

//06 -> some(콜백): 조건을 만족하는 값이 하나라도 있으면 true를 반환
const arr6 = [3, -1, 5, 7];
console.log(arr6.some(x=>x<0));

//07 -> every(콜백): 모든 값이 조건을 만족하면 true를 반환합니다.
const arr7 = [4, 5, 6];
console.log(arr7.every(x=>x>3));

//08 -> includes(값): 배열에 값이 포함되어 있는지 확인
const arr8 = [1, 3, 5, 7, 9];
console.log(arr8.includes(7))

//09 -> forEach(콜백): 각 요소에 대해 함수를 실행합니다.
const arr9 = ['a', 'b', 'c'];
arr9.forEach(x => console.log(x));

//10
const arr10 = [2, 5, 8, 1, 10];
console.log(arr10.filter(x=>x>5).map(x=>x*2));

console.clear()

//Array 연습퀴즈 2
//01
function solution(ages){
    return ages.filter(x=>x%2===0);
}
console.log(solution([21, 24, 30, 17, 18]));

//02
function solution1(socre){
    return socre.map(x=>x*x);
}
console.log(solution1([2, 3, 4]));

//03
function solution2(times){
    return times.sort((a,b)=>b-a);
}
console.log(solution2([12, 5, 8, 20]));

//04
function solution3(candies){
    return candies.reduce((a,b)=>a+b,0);
}
console.log(solution3([1, 2, 3, 4]));

//05
function solution4(heights){
    return heights.find(x=>x>170);
}
console.log(solution4([160, 168, 172, 165]));

//06
function solution5(scores){
    return scores.some(x=>x=100)
}
console.log(solution5([80, 90, 100, 70]));

//07
function solution6(ages){
    return ages.every(x => x>10);
}
console.log(solution6([12, 15, 9, 20]));

//08
function solution7(names){
    return names.includes('Camel');
}
console.log(solution7(['Irangi', 'Camel', 'Shoopa']));

//09
function solution8(names){
    names.forEach(x=>console.log(x))
}
solution8(['Irangi', 'Camel', 'Shoopa']);

//10
function solution9(scores){
    return scores.filter(x=>x>=60).map(x=>x*2);
}
console.log(solution9([50, 60, 70, 80]));