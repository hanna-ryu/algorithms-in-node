const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const basketNumber = parseInt(input[0].split(' ')[0]);
const repeatNumber = parseInt(input[0].split(' ')[1]);
const arr = Array.from({ length: basketNumber }, (v, i) => i + 1);

for (let i = 1; i <= repeatNumber; i++) {
  let x = parseInt(input[i].split(' ')[0]);
  let y = parseInt(input[i].split(' ')[1]);
  let temp = arr[x - 1];
  arr[x - 1] = arr[y - 1];
  arr[y - 1] = temp;
}

console.log(arr.join(' '));
