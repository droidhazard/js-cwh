sessionStorage.setItem('file', 'image.png')

window.onstorage = (e) => {
  alert(`Change Detected, from ${e.oldValue} to ${e.newValue}`)
  console.log(e)
}