console.log(document.cookie)
// document.cookie = 'name=zob1029'
// document.cookie = 'userID=112'
// document.cookie = 'playerID=960'
console.log(document.cookie)
let key = prompt('enter your key')
let value = prompt('enter your value')
let hash = encodeURIComponent('APPLE##$$h 0')
document.cookie = '1=2;path=/d'
console.log(hash)
console.log(decodeURIComponent(hash))
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)