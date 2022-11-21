// document.body.firstElementChild.firstElementChild.firstElementChild.style.background = 'red'
console.log('hi')
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green'
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green'

Array.from(document.getElementsByTagName('li')).forEach((element) => {
  element.style.background = 'cyan'
})


