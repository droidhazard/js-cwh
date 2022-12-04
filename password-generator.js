const smalls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['~', '!', '@', '#', '$', '%', '&', '?']

class Password {
  constructor(passwordType) {
    this.passwordType = passwordType
  }
  generatePassword(passwordType) {
    let randomCaps = []
    let randomSmalls = []
    let randomNumbers = []
    let randomSymbols = []

    let randomCapIndex
    let randomSmallIndex
    let randomNumberIndex
    let randomSymbolIndex

    // Generate Random Capital Letters
    for (let i = 0; i < 2; i++) {
      randomCapIndex = Math.floor(Math.random() * smalls.length)
      randomCaps.push(smalls[randomCapIndex].toUpperCase())
    }
    // Generate Random Small Letters
    for (let i = 0; i < 10; i++) {
      randomSmallIndex = Math.floor(Math.random() * smalls.length)
      randomSmalls.push(smalls[randomSmallIndex])
    }
    // Generate Random Numbers
    for (let i = 0; i < 4; i++) {
      randomNumberIndex = Math.floor(Math.random() * numbers.length)
      randomNumbers.push(numbers[randomNumberIndex])
    }
    // Generate Random Symbols
    for (let i = 0; i < 3; i++) {
      randomSymbolIndex = Math.floor(Math.random() * symbols.length)
      randomSymbols.push(symbols[randomSymbolIndex])
    }
    console.log(randomCaps)
    console.log(randomSmalls)
    console.log(randomNumbers)
    console.log(randomSymbols)

    // Aaaaa123
    // Aaaaa123&
    // AAaaaa123&&1

    if(passwordType === 'weak') {
      return `${randomCaps[0]}${randomSmalls[0]}${randomSmalls[1]}${randomSmalls[2]}${randomSmalls[3]}${randomNumbers[0]}${randomNumbers[1]}${randomNumbers[2]}`
    } else if (passwordType === 'medium') {
      return `${randomCaps[0]}${randomSmalls[0]}${randomSmalls[1]}${randomSmalls[2]}${randomSmalls[3]}${randomNumbers[0]}${randomNumbers[1]}${randomNumbers[2]}${randomSymbols[0]}`
    } else if (passwordType === 'strong') {
      return `${randomCaps[0]}${randomCaps[1]}${randomSmalls[0]}${randomSmalls[1]}${randomSmalls[2]}${randomSmalls[3]}${randomNumbers[0]}${randomNumbers[1]}${randomNumbers[2]}${randomSymbols[0]}${randomSymbols[1]}${randomNumbers[3]}`
    } else {
      return null
    }
  }
}

const abc = new Password()
let weakPass = abc.generatePassword('weak')
let mediumPass = abc.generatePassword('medium')
let strongPass = abc.generatePassword('strong')

console.log(weakPass)
console.log(mediumPass)
console.log(strongPass)