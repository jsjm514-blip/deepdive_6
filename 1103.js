// 공배수 구하기
function getNUmber(num,x){
    if(num%x===0){console.log(`공배수`)}
    else{console.log(`공배수아님`)}

}
getNUmber(60,2) //뒤에 있는 x가 앞에 있는 num의 공배수이면 '공배수'출력, 아니면 '공배수아님'출력
getNUmber(60,7)