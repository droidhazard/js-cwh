// Question 1 and 2
class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  add(num) {
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary

  }
}

let a = new Complex(2, 4)
let b = new Complex(6, 2)
console.log(a.add(b))
console.log(a.real, a.imaginary)

// Question 3
class Human {
  constructor(name, age, hobby) {
    this.name = name
    this.age = age
    this.hobby = hobby
  }
  wakeUp() {
    console.log(`${this.name} is waking up`)
  }
  sleep() {
    console.log(`${this.name} is going to sleep`)
  }
}
class Student extends Human {
  constructor(name, age, hobby, grade) {
    super(name, age, hobby)
    this.grade = grade
  }
  goToSchool() {
    console.log(`${this.name} is going to school`)
  }
  sleep() {
    console.log(`${this.name} is sleeping after long study session`)
  }
}
const hamza = new Human('Hamza', 21, 'Mathematics')
const zohaib = new Student('Zohaib', 21, 'Computer', 12)

console.log(hamza)
console.log(zohaib)
hamza.sleep()
zohaib.sleep()

// Question 4
console.log(zohaib instanceof Human)