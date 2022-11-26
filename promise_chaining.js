// // Load script function

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.type = 'text/javascript'
    document.body.appendChild(script)
    script.onload = () => {
      resolve('Script has been loaded')
    }
    script.onerror = () => {
      reject(new Error('Something went wrong'))
    }
  })
}


let sc1 = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
.then((value) => {
  console.log(value)
})
.catch((error) => {
  console.log(error)
})
