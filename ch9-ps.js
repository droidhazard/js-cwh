// // Question 1
// const loadScript = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let script = document.createElement('script')
//     script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
//     script.type = 'text/javascript'
//     document.body.appendChild(script)
//     script.onload = () => {
//       resolve(1)
//     }
//     script.onerror = () => {
//       reject(new Error('Couldn`t load the script'))
//     }
//   }, 2000)
// })

// .then((value) => {
//   console.log(value)
// })
// .catch((error) => {
//   console.log(error)
// })

// // codeWithHarry's aswer
// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = src
//     document.body.append(script)
//     script.onload = () => {
//       resolve(src + " Done success!")
//     }
//   })
// }
// let load = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
// load.then((value) => {
//   console.log(value)
// })
// //  // Question 2
// const main = async () => {
//   const firstSec = new Date().getMilliseconds()
//   const load = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
//   console.log(load)
//   const secSec = new Date().getMilliseconds()
//   console.log(`total time took: ${secSec - firstSec}MS`)
// }
// main()

// // Question 3
// const p2 = async () => {
//   console.log('wait 3 seconds for result...')
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('3 sec promise failed'))
//     }, 3000)
//   })
// }

// const main3 = async () => {
//   try {
//     await p2()
//   } catch (error) {
//     console.log(error)
//   }
// }
// main3()

// // Question 4
const pro1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 1000)
  })
}
const pro2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20)
    }, 2000)
  })
}
const pro3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30)
    }, 3000)
  })
}
const fullAll = async () => {
  console.time('run')
  // let a1 = await pro1()
  // let a2 = await pro2()
  // let a3 = await pro3()
  // console.log(a1, a2, a3)
  let a1 = pro1()
  let a2 = pro2()
  let a3 = pro3()
  let a1a2a3 = await Promise.all([a1, a2, a3])
  console.log(a1a2a3)
  console.timeEnd('run')
}
fullAll()