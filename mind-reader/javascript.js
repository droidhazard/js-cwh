//  DOCUMENT OBJECTS
let instructions = document.getElementById('instructions')
let urduBtn = document.getElementById('urdu')
let englishBtn = document.getElementById('english')
const gridBtn1 = document.getElementById('gridBtn1')
const gridBtn2 = document.getElementById('gridBtn2')
const gridBtn3 = document.getElementById('gridBtn3')
const gridBtn4 = document.getElementById('gridBtn4')
const gridBtn5 = document.getElementById('gridBtn5')

// VARIABLES
const engInst = "Think of a Name or Word in your mind which contains 5 letters"
const urdInst = "Apne dimagh me koi lafz ya naam socho jisme 5 huroof hon"
const miniInfoEng1 = 'Now tell which line contains the first letter of the word you thought'
const miniInfoEng2 = 'Now tell which line contains the second letter of the word you thought'
const miniInfoEng3 = 'Now tell which line contains the third letter of the word you thought'
const miniInfoEng4 = 'Now tell which line contains the first letter of the word you thought'
const miniInfoEng5 = 'Now tell which line contains the fifth letter of the word you thought'
const miniInfoUrd1 = 'Aapne jo lafz socha hai uska pehla huroof kis line me he?'
const miniInfoUrd2 = 'Aapne jo lafz socha hai uska doosra huroof kis line me he?'
const miniInfoUrd3 = 'Aapne jo lafz socha hai uska teesra huroof kis line me he?'
const miniInfoUrd4 = 'Aapne jo lafz socha hai uska chotha huroof kis line me he?'
const miniInfoUrd5 = 'Aapne jo lafz socha hai uska panchwan huroof kis line me he?'

let iterationPageOne = 0;
let iterationPageTwo = 0;
let y_coord = [0,0,0,0,0]
let x_coord = [0,0,0,0,0]
let lang = 'eng'

// FUNCTIONS
urduBtn.onclick = () => {
  instructions.innerText = urdInst
}
englishBtn.onclick = () => {
  instructions.innerText = engInst
}
gridBtn1.onclick = () => {
  y_coord[iterationPageOne] = 1;
  gridBtn1.classList.add('grid-box-active')
  iterationPageOne++;
}
gridBtn2.onclick = () => {
  y_coord[iterationPageOne] = 2;
  gridBtn2.classList.add('grid-box-active')
  iterationPageOne++;
}
gridBtn3.onclick = () => {
  y_coord[iterationPageOne] = 3;
  gridBtn3.classList.add('grid-box-active')
  iterationPageOne++;
}
gridBtn4.onclick = () => {
  y_coord[iterationPageOne] = 4;
  gridBtn4.classList.add('grid-box-active')
  iterationPageOne++;
}
gridBtn5.onclick = () => {
  y_coord[iterationPageOne] = 5;
  gridBtn5.classList.add('grid-box-active')
  iterationPageOne++;
}


