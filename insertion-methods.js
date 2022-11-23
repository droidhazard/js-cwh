let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + "<h1>hello World</h1>";

let div = document.createElement('div')
div.innerHTML = '<h3 style="color: red">I am an appended child</h3>'
// a.appendChild(div)
// document.body.appendChild(div)
// a.prepend(div)
// a.before(div)
// document.body.prepend(div)
// a.after(div)
// document.body.after(div)

let water = document.getElementById('water')
let fire = document.createElement('h3')
fire.innerText = 'fire'
water.replaceWith(fire)


// let stylesheet = document.createElement("style")
// stylesheet.innerHTML = "* {border:1px solid #000;margin:1px;} body {display:flex;flex-direction:row;}"
// document.head.appendChild(stylesheet)

// for (let i = 0; i < 10; i++) {
//   let div = document.createElement('div')
//   div.innerHTML = '<h6 style="color: red;">I am an appended child</h6>'
//   document.body.appendChild(div)
//   let h6 = document.getElementsByTagName('h6')[i]
//   h6.setAttribute('class', 'flex')
// }