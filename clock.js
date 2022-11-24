let dateObj = new Date()
let initialHour = dateObj.getHours()
let initialMinute = dateObj.getMinutes()
let ss = dateObj.getSeconds()
console.log(initialHour, initialMinute, ss)
let digitalClock = document.getElementsByClassName('digital-clock')[0]
let secondHand = document.getElementById('second-hand')
let minuteHand = document.getElementById('minute-hand')
let hourHand = document.getElementById('hour-hand')

// initial setup
let secondsRotation = ss * 6
let minutesRotation = initialMinute * 6
let hoursRotation = initialHour * 30
console.log(secondsRotation)
secondHand.style.rotate = `${secondsRotation}deg`
minuteHand.style.rotate = `${minutesRotation}deg`
hourHand.style.rotate = `${hoursRotation}deg`




setInterval(seconds = () => {
  dateObj = new Date()
  ss = dateObj.getSeconds()
  mm = dateObj.getMinutes()
  hh = dateObj.getHours()
  secondsRotation += 6;
  secondHand.style.rotate = `${secondsRotation}deg`
  digitalClock.innerText = `${hh}:${mm}:${ss}`
  if (mm != initialMinute) {
    minutesRotation += 6;
    minuteHand.style.rotate = `${minutesRotation}deg`
    initialMinute = mm;
  } else { }
  if (hh != initialHour) {
    hoursRotation += 30;
    hourHand.style.rotate = `${hoursRotation}deg`;
    initialHour = hh;
  }
}, 1000)
