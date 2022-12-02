// Question 1
// https://www.boredapi.com/api/activity

// HTML Elements for boredapi app
let cardTitle = document.getElementById('activity-title')
let cardBody = document.getElementById('activity-body')
let genBtn = document.getElementById('generate-idea')
let progressBar = document.getElementById('pbar')

// Fetch data from boredapi
const getActivity = () => {
  genBtn.setAttribute('disabled', true)
  progressBar.style.display = 'flex'
  let activity = fetch('https://www.boredapi.com/api/activity')
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
class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.id = getID()
  }
}

// Add a note to localStorage

const addNote = (note) => {
  let notes = getNotes()
  notes.push(note)
  localStorage.setItem('notes', JSON.stringify(notes))
}
const getID = () => {
  let id
  if (localStorage.getItem('notes') === null) {
    id = 0
  } else {
    id = localStorage.getItem('notes').length
  }
  return id;
}
// Get notes from localstorage
const getNotes = () => {
  let notes;
  if (localStorage.getItem('notes') === null) {
    notes = []
  } else {
    notes = JSON.parse(localStorage.getItem('notes'))
  }
  return notes;
}

addNoteBtn.addEventListener('click', () => {
  const title = addNoteTitle.value
  const body = addNoteBody.value
  const id = localStorage.length
  const note = new Note(title, body, id)
  addNote(note)
})