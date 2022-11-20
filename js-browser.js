// //   -TIME MEASURE
let arr = []
let i = 0;
const measureLoop = ()=> {
  while(i!=5) {
    let label = i + "while-loop"
    console.time(label)
    // console.log("waiting...")
    i++;
    let measure = console.timeEnd(label)
    arr.push(measure)
    console.log(measure)
  }
  
}
measureLoop()
console.log(arr)

// //   -PASSWORD SHOW AND HIDE BUTTON
const passField = document.getElementById('pass-field')
let showPass = ()=> {
  passField.type = 'text'
}
let hidePass = ()=> {
  passField.type = 'password'
}

