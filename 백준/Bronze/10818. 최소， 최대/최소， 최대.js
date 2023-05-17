const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const arr = input[1].split(" ")
const newArr = arr.map(num => parseInt(num));
const maxNum = Math.max(...newArr);
const minNum = Math.min(...newArr);
console.log(minNum + " " +maxNum );