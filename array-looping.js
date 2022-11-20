let num = [3, 5, 1, 2, 4]
// for (let i=0;i<num.length;i++) {
//   console.log(num[i])
// }

// //  -FOREACH LOOP
num.forEach((element)=> {
  console.log(element)
})

// //   -ARRAY.FROM
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// //   -FOR OF
for (let i in num) {
  console.log(i)
}

// //   -FOR OF
for (let item of num) {
  console.log(item)
}


