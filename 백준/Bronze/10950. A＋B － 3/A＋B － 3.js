const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().split('\n');

for (let i = 1 ; i <= parseInt(input[0]) ; i++){
    const num1 = parseInt(input[i].split(" ")[0]);
    const num2 = parseInt(input[i].split(" ")[1]);
    
    console.log(num1 + num2)  
}