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
}
const getKey = () => {
  let key = prompt('enter the key you want to get the value of')
  let value = localStorage.getItem(key)
  console.log(value)
}