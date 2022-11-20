const alert = document.getElementById("alert")
let alertContent = parseInt(alert.innerText)

const update = ()=> {
  alertContent = alertContent * 2
  document.getElementById('alert').innerText = alertContent
  alert.classList.add('alert-animation')
  alert.classList.remove('alert-animation')
}