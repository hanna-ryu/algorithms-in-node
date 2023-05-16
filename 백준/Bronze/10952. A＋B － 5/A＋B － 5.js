const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")

for(let i = 0 ; i <= input.length -2 ; i++){
    const a = parseInt(input[i].split(" ")[0]);
    const b = parseInt(input[i].split(" ")[1]);
    console.log(a+b)
    
}