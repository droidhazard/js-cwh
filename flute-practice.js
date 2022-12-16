const notes = ['C#', 'D#', 'E', 'F#', 'G', 'A', 'B']

const main = () => {
  setInterval(()=> {
    let randIndex = Math.floor(Math.random() * notes.length)
    console.log(notes[randIndex])
  }, 5000)
}

main()