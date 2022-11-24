let btn = document.getElementById('btn')

let cancel = false

btn.addEventListener('click', e = () => {
  if (!cancel) { 
    alert("hello")
    cancel = true;
  } else {
    btn.removeEventListener('click', e)
  }
  console.log("e called")
})
btn.addEventListener('click', f = (coord) => {
  alert("bye")
  console.log("f called")
  console.log(coord.clientX, coord.clientY)
  console.log(coord.target)
})


let nameField = document.getElementById('name');
nameField.addEventListener('focus', focused = () => {
  nameField.style.border = '2px solid cyan'
  nameField.setAttribute('placeholder', '')
  nameField.style.outline = 'none'
})
nameField.addEventListener('blur', unfocused = () => {
  nameField.style.border = '1px solid gray'
  nameField.style.outline = 'none'
  nameField.setAttribute('placeholder', 'Enter your namez')
})



// let screenLog = document.querySelector('#screen-log');
// document.addEventListener('mousemove', logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }
