//01
const name = "강유민"
const phone = "01012345678"
function reservationCheck(guest,num) {
    const result = guest === name && num === phone ? "확인되었" : "확인되지않"
    console.log(`전화번호 ${num} 성함 ${guest}님, 예약이 ${result}습니다.`)
}
reservationCheck("강유민","01012345678")

//02 
function shopDiscount (member,price) {
    const ox = member ? "회원" : "비회원"
    const result = ox && price >= 50000 ?  "적용" : "적용 안"
    console.log(`${ox}이고, 구매금액이 ${price}이므로 할인이 ${result}됩니다.`)
}
shopDiscount (true, 55000)

//03
function attraction(age,height) {
    const x= age >= 7;
    const y= height>150
    const result = x && y ? "가능" : "불가능"
    console.log(`${age}살,키 ${height}cm이면 놀이기구에 탑승이 ${result}합니다. `)
}
attraction(6,151)

//04
function deciedActive(degree,weather) {
    const a = degree >=30;
    const b = weather === "rain" && "typhoon"
    const result = a || b ? "실내활동을 한다" : "실외활동을 한다"
    console.log(result)
}
deciedActive(28,"rain")

//05
function nextlevel (quest,reward) {
    const a = quest === "done";
    const b = reward === "get"
    const result = a||b?"다음단계로 넘어간다":"다음단계로 넘어가지 못한다"
    console.log(result)
}
nextlevel("done","none")

//06
function takeRetest(math,science) {
    const score = math || science >=80;
    console.log(`재시험`)
}
takeRetest(77,90)

//07
function checkService(agree) {
    const result= !agree ? "서비스 이용이 제한됩니다.":"서비스를 이용할 수 있습니다.";
    console.log(result);
}
checkService(false)

//08
function goOutside(umbrella,rain) {
    const result = !umbrella || !rain ? "외출하지않는다" : "외출한다"
    console.log(result)
}
goOutside(true,false)