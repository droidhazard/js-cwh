class Employee {
  constructor(name) {
    this.name = name
    console.log(`${this.name}: Employee's constructor is here`)
  }
  login() {
    console.log(`Employee has logged in`)
  }
  logout() {
    console.log(`Employee has logged out`)
  }
  requestLeave(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    this.name = name
    console.log(`${this.name}: Programmer's constructor is here`)
  }
  // constructor(...args) { // if there is no constructor in child class, it will automatically be created
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeave(leaves) {
    super.requestLeave(leaves)
    // console.log(`Employee has requested ${leaves+1} leaves, (One extra)`)
    console.log('this is also working')
  }
}

let e = new Programmer('Zohaib')
e.login()
e.requestLeave(3)