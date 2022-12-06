// Most Complicated Hello World Program
const hw = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text)
    },1)
  })
}
;(() => {
  hw('Hello World!')
})()
// Question 1
;(async () => {
  setTimeout(() => {
    console.log('Hello')
    console.log('World')
  }, 2000)
})();

// Question 2
let avgOf = [45, 55, 56, 50, 48, 47, 51]

const findAverage = (arr) => {
  let total = 0;
  let noOfItems = arr.length
  console.log(arr)
  for (const element of arr) {
    total+= element
  }
  return total / noOfItems
}

let average1 = findAverage(avgOf)
console.log(average1)

// Question 3
;(async (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Executed after ${n/1000} seconds`)
      resolve(n)
    },n)
  })
})(3000);