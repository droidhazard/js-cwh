// Question 1

let alertBtn = document.getElementById('alert')
let promptBtn = document.getElementById('prompt')
let confirmBtn = document.getElementById('confirm')

alertBtn.addEventListener('click', (showAlert) => {
  alert('I am an alert')
})
promptBtn.addEventListener('click', (showPrompt) => {
  prompt('I am a prompt')
})
confirmBtn.addEventListener('click', (showConfirm) => {
  confirm('I am a confirmation box')
})

// Question 2

let googleBtn = document.getElementById('googleBtn')
let youtubeBtn = document.getElementById('youtubeBtn')
let facebookBtn = document.getElementById('facebookBtn')
let gmailBtn = document.getElementById('gmailBtn')
let githubBtn = document.getElementById('githubBtn')

// Question 3

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }
// setInterval(async function() {
//   let url = 'https://jsonplaceholder.typicode.com/todos/1'
//   console.log(await fetchContent(url))
// }, 3000)

// Question 4
let toggleBtn = document.getElementById('bulbToggle')
let bulb = document.getElementsByClassName('bulb-head')[0]
toggleBtn.addEventListener('click', ()=> {
  bulb.classList.toggle('bulb-lit')
})