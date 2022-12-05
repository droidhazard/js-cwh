// const sayHello = () => {
//   console.log('Hello')
// }

// const sayHello = (name) => console.log('Hello ' + name);
const sayHello = name => console.log('Hello ' + name);
sayHello('Droid', 'Good Afternoon')

// In an Object this. refers to the property of that object. and in any othe block this. refers to the window object
const x = {
  name: 'Zohaib',
  role: 'JS Developer',
  exp: 2,
  show: function () {
    console.log(this)
    const that = this
    setTimeout(function () {
      console.log(this)
      console.log(that.name + ' is ' + that.role)
    }, 2000)
  },
  hide: function() {
    ;(() => {
      console.log(this.name, 'is praying')
      ;(() => {
        console.log(`${this.name} has ${this.exp} year(s) of experience`)
      })()
    })()
  }
}

// In an event this. refers to the object that triggered the event
document.addEventListener('click', function(e) {
  console.log(this.head)
  console.log(e.clientX)
})

x.show()
x.hide()