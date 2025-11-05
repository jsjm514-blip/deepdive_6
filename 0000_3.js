//Array 연습

//01 -> filter로 짝수만 추출 ( filter(콜백):조건에 맞는 요소만 추출)
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.filter(x => x%2===0))

//02 -> map으로 각 요소 제곱 만들기 ( map:각 요소를 변환한 새 배열을 만드는 것 )
const arr2 = [1, 2, 3, 4];
console.log(arr2.map(x=>x*x))

//03 -> sort로 내림차순 정렬
const arr3 = [5, 2, 9, 1];
console.log(arr3.sort((a,b)=>b-a))

//04 -> reduce로 모든 합 구하기
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reduce((acc,cur)=>acc+cur,0))

//05 -> find(콜백):조건에 맞는 첫번째 값 반환
const arr5 = [3, 7, 12, 5, 20];
console.log(arr5.find(x => x > 10));

