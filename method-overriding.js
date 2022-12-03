class Employee {
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
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeave(leaves) {
    super.requestLeave(leaves)
    // console.log(`Employee has requested ${leaves+1} leaves, (One extra)`)
    console.log('this is also working')
  }
}

let e = new Programmer()
e.login()
e.requestLeave(3)