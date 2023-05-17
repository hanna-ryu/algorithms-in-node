const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")
const count = parseInt(input[0]);
const findingNum = parseInt(input[2]);
const arr = input[1].split(" ")
let answerArr = arr.filter((num) => parseInt(num) === findingNum);
console.log(answerArr.length)