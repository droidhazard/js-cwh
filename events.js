let username = document.getElementsByName('userName')
let password = document.getElementsByName('password')
let submit = document.getElementsByName('submit')

submit.onclick = () => {
  console.log(username.innerText)
  console.log(password.innerText)
}
