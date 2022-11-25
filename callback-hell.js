
loadScript = (src, callback) => {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => {
    console.log('Loaded script with SRC: ', src)
    callback(null, src);
  }
  script.onerror = () => {
    console.error("GO TO HELL")
    callback(new error("Src got some errors: "), src)
  }

  document.body.appendChild(script)
}

const goodMorning = (error, src) => {
  if (error) {
    console.log(error)
    sendErrorMessageToCeo()
    return
  }
  console.log('Good morning', src)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', goodMorning)

