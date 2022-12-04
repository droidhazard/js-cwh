let a = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 1000)
  })
}

(async () => {
  let b = await a()
  console.log(b)
  let c = await a()
  console.log(c)
  let d = await a()
  console.log(d)
})();

(async () => {
  console.log('hello')
})();

(() => {
  console.log('bye')
})()

