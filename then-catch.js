let promise = new Promise((resolve, reject) => {
  console.log('promise is pending')

  setTimeout(wait = () => {
    console.log('4 sec promise fulfilled')
    // resolve(true)
    reject(new Error('we dont need this'))
    // console.log(promise)
    // console.log('am i still working ?')
  }, 4000)
})

// console.log(promise)

let promise2 = new Promise((resolve, reject) => {
  console.log('promise 2 is pending')
  setTimeout(() => {
    console.log('4.5 sec promise resolved')
    resolve(true)
  }, 4500)
})

// to catch the error
promise.catch((err) => {
  console.log('some error occured in promise')
})

// to get the result
promise2.then((sign) => {
  console.log(sign)
})