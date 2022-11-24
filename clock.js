let dateObj = new Date()
let hh = dateObj.getHours()
let mm = dateObj.getMinutes()
let ss = dateObj.getSeconds()
console.log(hh, mm, ss)
let digitalClock = document.getElementsByClassName('digital-clock')[0]
let startClock = document.getElementById('start-clock')
let stopClock = document.getElementById('stop-clock')
let secondHand = document.getElementById('second-hand')
let minuteHand = document.getElementById('minute-hand')
let hourHand = document.getElementById('hour-hand')

// initial setup
let secondsRotation = ss * 6
let minutesRotation = mm * 6
let hoursRotation = hh * 30
console.log(secondsRotation)
secondHand.style.rotate = `${secondsRotation}deg`
minuteHand.style.rotate = `${minutesRotation}deg`
hourHand.style.rotate = `${hoursRotation}deg`




setInterval(seconds = () => {
  dateObj = new Date()
  ss = dateObj.getSeconds()
  secondsRotation += 6;
  secondHand.style.rotate = `${secondsRotation}deg`
  digitalClock.innerText = `${hh}:${mm}:${ss}`
}, 1000)
setInterval(minutes = () => {
  dateObj = new Date()
  mm = dateObj.getMinutes()
  minutesRotation += 6;
  minuteHand.style.rotate = `${minutesRotation}deg`
}, 60000)
setInterval(hours = () => {
  dateObj = new Date()
  hh = dateObj.getHours()
  hoursRotation += 30;
  hourHand.style.rotate = `${hoursRotation}deg`;
}, 3600000)

startClock.addEventListener('click', () => {
  setInterval(running)
})
stopClock.addEventListener('click', () => {
  console.log('stop')
  clearInterval(running)
})