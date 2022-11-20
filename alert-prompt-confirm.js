alert("Enter the value in next popup")
let value = prompt("Enter Here:", 575)
document.write(value)
console.log(value, typeof value)
let write = confirm("Red button?")
if (write) {
  document.write(`<button style="background-color: red;">${value}</button>`)
} else {
}