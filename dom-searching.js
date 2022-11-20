// Change the Card title to red
let cTitle = document.getElementById("firstcardtitle")
cTitle.style.color ='red'

let ctitles = document.querySelectorAll('.card-title')
console.log(ctitles)
ctitles[0].style.color = 'seagreen'
ctitles[1].style.color = 'teal'
ctitles[2].style.color = 'turquoise'

document.querySelector('.this').style.color = 'white'
document.querySelector('.this').style.backgroundColor = 'black'

document.body.querySelector('.second').querySelector('.bt').style.background = 'red'

console.log(document.getElementsByTagName('button'))

console.log(document.getElementsByName('search'))