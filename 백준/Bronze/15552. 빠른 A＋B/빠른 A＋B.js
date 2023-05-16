const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n");
const caseNumber = parseInt(input[0]);
let answer = ""
for(let i = 1 ; i < input.length ; i++){
    const a = parseInt(input[i].split(" ")[0])
    const b = parseInt(input[i].split(" ")[1])
    answer += (a + b + "\n")
}
console.log(answer)