const fetchWeather = async () => {
  let mirpurkhasWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('25^ C')
    }, 2000)
  })
  let sangharWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('26^ C')
    }, 5000)
  })


  // mirpurkhasWeather.then(console.log)
  // sangharWeather.then(console.log)
  console.log('Fetching mirpurkhas weather')
  let mirpurkhasW = await mirpurkhasWeather
  console.log('Fetched mirpurkhas weather: ', mirpurkhasW)
  console.log('Fetching sanghar weather')
  let sangharW = await sangharWeather
  console.log('Fetched sanghar weather: ', sangharW)
  return [mirpurkhasW, sangharW]
}

const cheRry = async () => {
  console.log('I am cherry')
  return 8;
}
const main = async () => {
  console.log('Welcome to Weather Control Room')
  let a = await fetchWeather()
  a.then((value) => {
    console.log(value)
  })
  let b = await cheRry()
}
main()