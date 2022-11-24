// alert('hello world')

let a = setTimeout(()=> {
  alert('I am inside of setTimeout')
}, 2000)

let b = confirm("Do you want to clear timeout ?")
if (b==true) {
  clearTimeout(a)
} else {}

let health = 100
setInterval(()=> {
  health--;
  console.log(health)
}, 1000)

// clearTimeout(a)
console.log(a)