// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
console.log(document.head.lastChild)
console.log(document.head.childNodes[document.head.childNodes.length - 1])
console.log(document.head.hasChildNodes)
let num = [1,2,3,4,5]
let arr = Array.from(document.head.childNodes)
arr.forEach((element)=> {
  console.log(element)
})