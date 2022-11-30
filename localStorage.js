let why = [1, 2, 3]
const updateStorage = (arr) => {
  localStorage.setItem('ids', arr)
}
why.push(4)
localStorage.setItem('name', 'zohaib')

const setKey = () => {
  let key = prompt('enter key you want to set')
  let value = prompt(`enter a value for ${key}`)
  localStorage.setItem(key, value)
  console.log(key, value)
  if (key == 0) {
    localStorage.clear()
  }
}
const getKey = () => {
  let key = prompt('enter the key you want to get the value of')
  let value = localStorage.getItem(key)
  console.log(value)
}

let color = prompt('what is your favourite color')
localStorage.setItem('color', color)
if (color != 'green') {
  console.log('you are not zohaib')
  localStorage.removeItem('color')
}

console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.length)
Object.keys(localStorage).forEach(function(key){
  console.log(localStorage.getItem(key));
});