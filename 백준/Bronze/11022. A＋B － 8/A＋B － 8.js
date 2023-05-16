const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")
const count = parseInt(input[0]);
for(let i = 1 ; i <= count ; i++){
    const a = parseInt(input[i].split(" ")[0]);
    const b = parseInt(input[i].split(" ")[1]);
    const sum = a+b;
    console.log(`Case #${i}: ${a} + ${b} = ${sum}`)
}