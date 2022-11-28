let weath = fetch('https://goweather.herokuapp.com/weather/Ny')

weath.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  // console.log(response.text())
  console.log(response.headers)
  return response.json()
  // return response.text()
}).then((response) => {
  console.log(response)
})