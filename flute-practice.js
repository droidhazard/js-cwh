const notes = ['C#', 'D#', 'E', 'F#', 'G', 'A', 'B']

const main = () => {
  setInterval(()=> {
    let randIndex = Math.floor(Math.random() * notes.length)
    console.log(notes[randIndex])
  }, 3000)
}

main()