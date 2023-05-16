const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim()
let answer = []
for(let i = 1 ; i <= input ; i++){
    let blanks = " ".repeat(input-i);
    let stars = "*".repeat(i);
    answer.push(blanks+stars)
}
console.log(answer.join("\n"))