const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString()
let answer = 0;
for(let i = 1 ; i <= parseInt(input) ; i++){
    answer += i
}
console.log(answer);