let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Value 1')
  }, 11000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Value 2')
    reject(new Error('go to hell'))
  }, 2000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Value 3')
  }, 3000)
})

// p1.then((value) => {
//   console.log(value)
// })
// p2.then((value) => {
//   console.log(value)
// })
// p3.then((value) => {
//   console.log(value)
// })

// // Promise.all = waits for all promises to resolve
// let promiseAll = Promise.all([p1, p2, p3])
// // Promise.allSettles = same as above but tries to handle errors
// let promiseAll = Promise.allSettled([p1, p2, p3])
// // Promise.race = returns the first promise that is fulfilled
// let promiseAll = Promise.race([p1, p2, p3])
// // Promise.any = returns the first promise that is both fulfilled and resolved
let promiseAll = Promise.any([p1, p2, p3])
promiseAll.then((value_arr) => {
  console.log(value_arr)
})