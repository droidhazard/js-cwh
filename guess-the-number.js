var readline = require('readline-sync')
let randomNum = Math.floor(Math.random() * 100) + 1
let score
let position = null
for (let lives=100;lives>0;lives--) {
  score = lives
  guess = readline.question(`${lives}:${position}, Enter a guess> `)
  if (guess==randomNum) {
    console.log(`You Won with the Score of ${score}, the Number was ${randomNum}`)
    break
  } else if (guess<randomNum){
    position = 'Low guess'
  } else if (guess>randomNum) {
    position = 'High guess'
  } else {
    continue
  }
}
// console.log(randomNum)