
// ghost보다 큰 user가 몇명인지 구하시오

const numbers = [149,180,192,170] // 키
const ghost = 167; // ghost의 키

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > ghost) {
    count++;
  }
}
console.log(`ghost보다 키가 큰 사람은 ${count}명입니다.`);