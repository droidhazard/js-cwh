document.title = "emoji"
let count = 0
document.write("<button onclick=\"notif()\">click me</button>")
const notif = () => {
  document.title = `emoji (${count})`
  console.log(count)
  count++;
}
console.log(document.body)