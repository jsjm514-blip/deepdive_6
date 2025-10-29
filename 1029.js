const user = ["irang", "camel", "ghost","sunny","henry"]
let userIndex = 4;

//서수로 3번째 있는 user의 이름을 찍으시오
//ForEach() 배열메서 사용

user. forEach ((name, idx) => {
    if (idx === 2 ) {console.log(`${idx+1}번째 users는 ${name}입니다.`)}
})

user. forEach ((name, idx) => {
    if (idx === userIndex-1) {console.log(`${userIndex}번째 users는 ${name}입니다.`)}
})


