// Question 1
// https://www.boredapi.com/api/activity

// HTML Elements for boredapi app
let cardTitle = document.getElementById('activity-title')
let cardBody = document.getElementById('activity-body')
let genBtn = document.getElementById('generate-idea')
let progressBar = document.getElementById('pbar')

// Fetch data from boredapi
const getActivity =  () => {
  genBtn.setAttribute('disabled', true)
  progressBar.style.display = 'flex'
  let activity =  fetch('https://www.boredapi.com/api/activity')
  .then((response) => {
    return response.json()
  }).then((activity) => {
    cardTitle.innerText = activity.type
    cardBody.innerText = activity.activity
    console.log(`Activity Type: ${activity.type}`)
    console.log(`Activity: ${activity.activity}`)
    genBtn.removeAttribute('disabled')
    progressBar.style.display = 'none'
  })
  console.log('hello')
}
getActivity()
genBtn.addEventListener('click', getActivity)

// HTML Elements for note App
addNoteTitle = document.getElementById('add-note-title')
addNoteBody = document.getElementById('add-note-body')
addNoteBtn = document.getElementById('add-note-btn')
removeNoteId = document.getElementById('remove-note-btn')
removeNoteBtn = document.getElementById('remove-note-btn')

// Note object
let notes2d = []
class Note  {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.id = localStorage.length
  }
}

// Add a note to localStorage
const printNote = () => {
  noteTitle = addNoteTitle.value
  noteBody = addNoteBody.value
  const note = new Note(noteTitle, noteBody)
  // console.log(note.title, note.body, note.id)
  let note1d = [note.title, note.body, note.id]
  notes2d.push(note1d)
  console.log(notes2d)
  notes2d.forEach((note, index) => {
    
  })
  localStorage.setItem()
}
addNoteBtn.addEventListener('click', printNote)