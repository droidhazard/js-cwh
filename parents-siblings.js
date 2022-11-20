let main = document.body.childNodes
main = Array.from(main)
for (value in main) {
  console.log(main[value])
}
console.log("---")
console.log(document.body.firstChild)
a = document.body.firstChild;
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.nextSibling)
console.log(a.nextSibling.nextSibling)
