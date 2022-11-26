let promise = new Promise( (resolve, reject) => {
  console.log('Hello promise')
  resolve(56);

})

console.log("Hello 1")
setTimeout( test = () => {
  console.log("Hello in 2 seconds")
}, 2000)
console.log("3 My Name is Zohaib")
console.log(promise)