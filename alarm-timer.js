// HTML Elements
const timerMinutes = document.getElementById('timerMinutes')
const setTimer = document.getElementById('setTimer')
const timerOutput = document.getElementById('timerOutput')
const topCircle = document.getElementsByClassName('top-circle')[0]
const audio = new Audio('morning_alarm_foba.mp3');

counter = async (time) => {
  let c = 0;
  const counter1 = setInterval(() => {
    if (c!=time) {
      c += 1000;
      timerOutput.innerText = `${c} / ${time}`
      // console.log(c)
    } else {
      clearInterval(counter1)
      topCircle.style.backgroundColor = '#e4345a'
      audio.play();
    }
  }, 1000)
}
setAlaram = async (minutes) => {
  counter(minutes * 60000)
  setTimeout(() => {
    console.log('RRing RRing...')
  }, minutes * 60000)
}

setTimer.addEventListener('click', () => {
  topCircle.style.backgroundColor = '#eb7434'
  minutes = timerMinutes.value
  timerMinutes.value = ''
  console.log(minutes)
  setAlaram(minutes)
})