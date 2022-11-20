// Array Methods

let num = [1, 2, 3, 34, 4]
let b = num.toString() // num is now a string
console.log(b)
console.log(num)
let c = num.join("_")
console.log(c + typeof c)
let k = num.pop()
console.log(num, k) // returns popped value
let r = num.push(56) // returns new array length
console.log(num, r)
let p = num.shift()
console.log(num, p) // removes and element fron the start of an array, returns shifted value
let q = num.unshift(10)
console.log(num, q) // adds new element to the beginning of an array