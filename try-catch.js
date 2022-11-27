setTimeout(() => {
  console.log('Hacking wifi... please wait...')
}, 1000)

try {
  console.log(user)
} catch(error) {
  console.log('Congratulations on error')
}

try {
  try {
    setTimeout(() => {
      // console.log(free) // // catch won't work here, because the code is scheduled for later
    }, 100)
  } catch (eR) {
    console.log(eR)
  }
  console.log(password)
} catch(err) {
  console.log(err)
}

setTimeout(() => {
  console.log('Fetching username and password... please wait...')
}, 2000)
setTimeout(() => {
  console.log('Hacking facebook account of wifi user... please wait...')
}, 3000)
setTimeout(() => {
  console.log('All wifi user`s facebook accounts hacked... please wait...')
}, 4000)

