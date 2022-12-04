// Rest Operator
let arr = [4, 6, 8, 10, 12, 14]
// No need to do this
// let a = arr[0]
// let b = arr[1]

// let [a, b, c, ...rest] = arr
let [a, , b, ...rest] = arr
// console.log(a, b, c, rest)
console.log(a, b, ...rest)
// console.log(...rest)


// Destructuring 
let { x, y } = { x: 420, y: 620 }
console.log(x, y)

// Spread Operator
const elements = ['button', 'checkbox', 'text', 'password']
let obj = { ...elements }
console.log(typeof obj, obj)

let obj2 = {
  name: 'Zohaib',
  company: 'Company xyz',
  address: 'Mirpur Khas'
}
console.log({...obj2, name:'Droid', company:'ABC llc.'}) // This will override the object properties
console.log({name:'Droid', company:'ABC llc.', ...obj2}) // This will print the object
console.log(obj2)

// Sum function varArgs

// const add = (...varArgs) => {
//   let ans = 0;
//   for (const element of varArgs) {
//     ans+= element;
//   }
//   return ans
// }

// console.log(add(1, 2, 3))
