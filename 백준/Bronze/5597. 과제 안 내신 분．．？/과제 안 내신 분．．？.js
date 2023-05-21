const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number); //배열[3,1,4,5,7,9...]
const answerArr = [];

for (let i = 1; i <= 30 ; i++){
    if(!input.includes(i)){
        answerArr.push(i)
    }
}
const realAnswer = answerArr.sort((a,b) => a - b).join(`\n`)
console.log(realAnswer)