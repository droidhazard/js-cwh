// // Question 1
const loadScript = new Promise((resolve, reject) => {
  setTimeout(() => {
    let script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    script.onload = () => {
      resolve(1)
    }
    script.onerror = () => {
      reject(new Error('Couldn`t load the script'))
    }
  }, 2000)
})

.then((value) => {
  console.log(value)
})
.catch((error) => {
  console.log(error)
})