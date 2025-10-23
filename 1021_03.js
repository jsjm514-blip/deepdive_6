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
