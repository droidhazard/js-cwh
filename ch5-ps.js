// var readline = require('readline-sync')

// let arr = []
// while (arr[arr.length-1]!= 0) {
//   let num = parseInt(readline.question("enter a number: "))
//   arr.push(num)
// }
// console.log(arr)
// console.log('sorry 0 is added to array')


// //   -FILTER FUNCTION PRACTICE
let arr10 = [1, 5, 55, 50, 100, 99, 15, 30, 22, 60, 54, 1000]
let divisibleByTen = arr10.filter((value)=> {
  return (value%10 == 0)
})
console.log(divisibleByTen)

// //   -RETURN SQUARES OF GIVEN NUMBERS
let arrGivenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrSquares = arrGivenNumbers.map((value)=> {
  return value * value;
})
console.log(arrSquares)