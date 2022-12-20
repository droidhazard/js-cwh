// Variables
let runner;
let bars = 1;
let playing = false;

// HTML Elements
const addBtn = document.querySelector('#add-btn')
const pauseBtn = document.querySelector('#pause-btn')
const removeBtn = document.querySelector('#remove-btn')
const barsAmount = document.querySelector('#bars-amount')
const myContainer = document.querySelector('.mycontainer')


pauseBtn.addEventListener('click', () => {
  if (!playing) {
    pauseBtn.getElementsByTagName('i')[0].innerText = 'pause'
    playing = true
    visualize()
  } else {
    pauseBtn.getElementsByTagName('i')[0].innerText = 'play_arrow'
    playing = false
    clearInterval(runner)
  }
})

addBtn.addEventListener('click', () => {
  bars++;
  let newBar = document.createElement('div')
  newBar.classList.add('bar')
  newBar.id = `bar-${bars}`
  myContainer.appendChild(newBar)
  barsAmount.innerText = bars
})

removeBtn.addEventListener('click', () => {
  if (bars > 1) {
    bars--;
    const barToRemove = document.getElementsByClassName('bar')[bars - 1]
    barToRemove.remove()
    barsAmount.innerText = bars
  }
})

function visualize() {
  runner = setInterval(() => {
    for (let i = 1; i <= bars; i++) {
      const bar = document.querySelector('.mycontainer').getElementsByTagName('div')[i - 1]
      const peak = Math.floor(Math.random() * 100)
      bar.style.height = peak + '%'

      // For Debugging
      console.log(`bars: ${bars}, id: ${i}`)
    }
  }, 300)
}