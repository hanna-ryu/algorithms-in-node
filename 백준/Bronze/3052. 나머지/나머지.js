const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number); 
const answer  = input.map(n => n % 42)
const finalAnswer = [...new Set(answer)];
console.log(finalAnswer.length)
