// Variable Definitions
let gr1 = document.getElementById('gr1')
let gr2 = document.getElementById('gr2')
let gr3 = document.getElementById('gr3')
let gr4 = document.getElementById('gr4')
let gr5 = document.getElementById('gr5')
let up = document.getElementById('up')
let left = document.getElementById('left')
let down = document.getElementById('down')
let right = document.getElementById('right')
let ground = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
let x_pos = 2
let y_pos = 2
let cur_pos = [y_pos, x_pos]
console.log(ground)

// Function Definitions
const updateGrid = () => {
  ground[y_pos][x_pos] = 1
  console.log(cur_pos)
  gr1.innerText = ground[0]
  gr2.innerText = ground[1]
  gr3.innerText = ground[2]
  gr4.innerText = ground[3]
  gr5.innerText = ground[4]
  // console.log(ground)
}

up.onclick = () => {
  ground[y_pos][x_pos] = 0
  if (y_pos != 0) { y_pos--; }
  else { y_pos = (ground.length - 1) }
  cur_pos = [y_pos, x_pos]
  updateGrid()
}
down.onclick = () => {
  ground[y_pos][x_pos] = 0
  if (y_pos != ground.length - 1) { y_pos++; }
  else (y_pos = 0)
  cur_pos = [y_pos, x_pos]
  updateGrid()

}
left.onclick = () => {
  ground[y_pos][x_pos] = 0
  if (x_pos != 0) { x_pos--; }
  else { x_pos = ground[0].length - 1 }
  cur_pos = [y_pos, x_pos]
  updateGrid()
}
right.onclick = () => {
  ground[y_pos][x_pos] = 0
  if (x_pos != ground[0].length - 1) { x_pos++; }
  else { x_pos = 0}
  cur_pos = [y_pos, x_pos]
  updateGrid()
}

updateGrid()