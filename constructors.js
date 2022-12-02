// class RailwayForm {
//   constructor(name, trainNo) {
//     console.log('constructor called ' + name + " " + trainNo)
//     this.name = name
//     this.trainNo = trainNo
//   }
//   submit = () => {
//     alert(this.name + ': This form is submitted for train#: ' + this.trainNo)
//   }
//   cancel = () => {
//     alert(this.name + ': This form is cancelled for train#: ' + this.trainNo)
//   }
// }

// let zohaibForm = new RailwayForm('Zohaib', 420)
// let hamzaForm = new RailwayForm('Hamza', 690)

// zohaibForm.submit()
// hamzaForm.submit()
// hamzaForm.cancel()

class RailwayForm {
  constructor(name, trainNo, address) {
    console.log('constructor called ' + name + " " + trainNo)
    this.name = name
    this.trainNo = trainNo
    this.address = address
  }
  preview = () => {
    console.log(this.name + ' your form is for train no ' + this.trainNo + ' and your address is ' + this.address)
  }
  submit = () => {
    alert(this.name + ': This form is submitted for train#: ' + this.trainNo)
  }
  cancel = () => {
    alert(this.name + ': This form is cancelled for train#: ' + this.trainNo)
    this.trainNo = 0
  }
}

let zohaibForm = new RailwayForm('zohaib', 13488, 'Antarctica')
zohaibForm.preview()
zohaibForm.submit()
zohaibForm.cancel()
zohaibForm.preview()
