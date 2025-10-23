function checkAge (age) {
    if (age > 19) {
    result = "성인";
    } else {
    result = "미성년자";
    }
console.log(`${age}세는 ${result}입니다.`)
}
checkAge (30)
checkAge (18)