const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const containerNum = parseInt(input[0].split(' ')[0]);
const playNum = parseInt(input[0].split(' ')[1]);

const answerArr = new Array(containerNum).fill(0);
for (let i = 1; i <= playNum; i++) {
  const arr = input[i].split(' ').map(Number);
  for (let k = arr[0]; k <= arr[1]; k++) {
    answerArr[k - 1] = arr[2];
  }
}
console.log(answerArr.join(' '));

