let a = {
  name: 'zohaib',
  language: 'javascript',
  run: () => {
    console.log('self RUN')
  }
}
console.log(a)

let p = {
  run: () => {
    console.log('RUN')
  }
}

a.__proto__ = p
p.__proto__ = {
  name2: 'droid'
}