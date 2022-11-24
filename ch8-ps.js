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