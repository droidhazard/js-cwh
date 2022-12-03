class Animal {
  constructor(name) {
    this._name = name
  }
  fly() {
    console.log('Mai udd raha hun', this.name)
  }
  get name() {
    return this._name
  }
  set name(newName) {
    this._name = newName
  }
}

class Robot extends Animal{

}

let a = new Animal('kutta')
let b = new Robot()
a.fly()
a.name = 'Bhai'
console.log(a.name)
console.log(a instanceof Robot)
console.log(a instanceof Animal)
console.log(b instanceof Animal)