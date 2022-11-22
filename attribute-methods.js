let first = document.getElementById('first').getAttribute('class')
let firstElem = document.getElementById('first')
console.log(first)
console.log(firstElem.hasAttribute("class"))
console.log(firstElem.hasAttribute("style"))

// togle hide unhide div
let divHidden = false;
document.getElementById('toggle-hide').onclick = () => {
  if (divHidden) {
    divHidden = false
    firstElem.removeAttribute("hidden")
  } else {
    divHidden = true
    firstElem.setAttribute("hidden", true)
  }
}

// toggle disable enable button
let btnDisabled = true
let disabledBtn = document.getElementById('dey')
document.getElementById('toggle-disable').onclick = () => {
  if (btnDisabled) {
    btnDisabled = false
    disabledBtn.removeAttribute('disabled')
    disabledBtn.innerText = 'I am enabled'
    document.getElementById('toggle-disable').innerText = 'Disable'
  } else {
    btnDisabled = true
    disabledBtn.setAttribute('disabled', true)
    disabledBtn.innerText = 'I am disabled'
    document.getElementById('toggle-disable').innerText = 'Enable'
  }
}

firstElem.setAttribute('class', 'true sach')
console.log(firstElem.getAttribute('class'))
let h3 = document.getElementById('h3')
console.log(h3.attributes)
let custom_attr = document.getElementById('custom_attr')
console.log(custom_attr.dataset)
console.log(custom_attr.dataset.game)
console.log(custom_attr.dataset.player)