const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")
const arr = input.map(num => parseInt(num));
const maxNum = Math.max(...arr);
console.log(maxNum + "\n" + (arr.indexOf(maxNum)+1));