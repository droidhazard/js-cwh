// //  Array methods

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219]
// //  -DELETE
// console.log(num)
// delete num[0]
// console.log(num + " - " + num.length)

// //  -CONCAT
// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// //  -COMPARE
// let compare = (a, b)=> {
//   return a - b
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// console.log(num)

// //   -SPLICE AND SLICE
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.splice(2, 3, 1021, 1022, 1023, 1024)
// console.log(num)
let slicedArray = num.slice(3, 5)
console.log(slicedArray)
