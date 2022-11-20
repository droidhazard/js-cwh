
const canDrive = (age)=> {
  return age>=18?true:false
}

const askAge = ()=> {
  age = Number.parseInt(prompt("What is your age"))
  // if (age>=4) {
    // location.href = "https://www.google.com"
  // }
  // if (age=='red') {
  //   document.body.style.backgroundColor = 'red'
  // } else if (age=='green') {
  //   document.body.style.backgroundColor = 'green'
  // } else if (age=='yellow') {
  //   document.body.style.backgroundColor = 'yellow'
  // }
  console.log(age)
  if (canDrive(age)) {
    alert("Yes you can drive")
  } else {
    alert("You cannot drive")
  }
  if (age<0) {
    console.error(`${age}, a person's age can't be less than 0`)
  }
}

askAge()

let seeAgain = confirm("Do you want to see it again?")
seeAgain==true?askAge():false;

