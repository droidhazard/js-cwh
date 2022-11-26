let p1 = new Promise((resolve, reject) => {
  console.log('2 sec promise not resolved')
  setTimeout(() => {
    resolve(1)
  }, 2000)
})
p1.then(() => {
  console.log('Hurray!')
  return new Promise((resolve, reject) => {
    let fail = true
    if (!fail) {
      resolve(true)
    } else {
      reject(new Error('Something went wrong'))
    }
  })
})  .then((resolveValue) => {
      console.log(resolveValue, 'Hurray! 2')
    })
    .catch((error) => {
      console.log(error)
    })
p1.then(() => {
  console.log('Congratulations! this promise is resolved')
})
