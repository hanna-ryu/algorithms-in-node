const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString()
const num = parseInt(input);
const numberOfLong = Math.ceil(num / 4)
let answer = ""


for (let i = 1 ; i <= numberOfLong ; i++){
    answer += "long "
}

console.log(`${answer}int`)