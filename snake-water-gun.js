// DOCUMENT OBJECTS
const snakeButton = document.getElementById('snake')
const waterButton = document.getElementById('water')
const gunButton = document.getElementById('gun')
const player = document.getElementById('player')
const computer = document.getElementById('computer')
const status = document.getElementById('status')

// Variables
let round = 1;
let cpuWins = 0;
let playerWins = 0;
let roundWinner;
let gameWinner;
let cpuChoice;
let choice;

const cpuTurn = () => {
  cpuRand = Math.floor(Math.random() * 3 + 1)
  if (cpuRand == 1) {
    cpuChoice = 'snake'
  } else if (cpuRand == 2) {
    cpuChoice = 'water'
  } else if (cpuRand == 3) {
    cpuChoice = 'gun';
  } else {
    console.error(cpuChoice, "ERROR IN CPU's CHOICE")
  }
  computer.innerText = cpuChoice
}

const submit = () => {
  cpuTurn()
  console.log(choice)
  console.log(cpuChoice)
  if (round < 6) {
    if (cpuChoice == 'snake' && choice == 'water') {
      roundWinner = 'cpu'
      cpuWins++
    } else if (cpuChoice == 'water' && choice == 'snake') {
      roundWinner = 'player'
      playerWins++
    } else if (cpuChoice == 'snake' && choice == 'gun') {
      roundWinner = 'player'
      playerWins++
    } else if (cpuChoice == 'gun' && choice == 'snake') {
      roundWinner = 'cpu'
      cpuWins++
    } else if (cpuChoice == 'gun' && choice == 'water') {
      roundWinner = 'player'
      playerWins++
    } else if (cpuChoice == 'water' && choice == 'gun') {
      roundWinner = 'cpu'
      cpuWins++
    } else {
      roundWinner = 'draw'
      round--
    }
    status.innerText = `${roundWinner} won the Round ${round}`
    round++;
  }
  if (round==6) {
    if (cpuWins>playerWins) {
      gameWinner = 'cpu'
    } else if (playerWins>cpuWins) {
      gameWinner = 'player'
    } else {
      gameWinner = 'draw'
    }
    status.style.backgroundColor = 'cyan'
    status.innerText = `${gameWinner} won the game`
  }

}

snakeButton.onclick = () => {
  choice = 'snake'
  player.innerText = choice
  submit()
}
waterButton.onclick = () => {
  choice = 'water'
  player.innerText = choice
  submit()
}
gunButton.onclick = () => {
  choice = 'gun'
  player.innerText = choice
  submit()
}
