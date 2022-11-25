
loadScript = (src, callback) => {
  let script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  script.onload = () => {
    console.log('Loaded script with SRC: ', src)
    callback(src);
  }
  script.onerror = () => {
    console.error("GO TO HELL")
  }
}

const goodMorning = (src) => {
  console.log('Good morning', src)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', goodMorning)

