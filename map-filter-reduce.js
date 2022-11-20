let arr = [45, 23, 21]
// //   -ARRAY MAP METHOD
let a = arr.map((value, index, array)=> {
  console.log(value, index, array)
  return value + " $USD"
})

// console.log(a)

// //   -ARRAY FILTER METHOD
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((value)=> {
  return value<10
})
// console.log(a2)

// //   -ARRAY REDUCE METHOD
let arr3 = [1, 2, 3, 5, 2, 1]
let a3 = arr3.reduce((value1, value2)=> {
  return value1 + value2
})
console.log(a3)
