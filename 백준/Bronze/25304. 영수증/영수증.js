const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n")
const totalPrice = parseInt(input[0]);
const numberOfProduct = parseInt(input[1]);
let answer = 0

for(let i =2 ; i <= numberOfProduct + 1; i++){
    const arr = input[i].split(" ")
    const price = parseInt(arr[0]) * parseInt(arr[1])
    answer += price
}

if(totalPrice === answer){
    console.log("Yes")
}else{
    console.log("No")
}
