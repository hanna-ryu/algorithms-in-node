const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")
    
const infoArr = input[0];
const A = parseInt(input[0].split(" ")[0]);
const B = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ")
    
let answerArr = arr.filter((num) => parseInt(num) < B);
answerArr.forEach(num => console.log(num));