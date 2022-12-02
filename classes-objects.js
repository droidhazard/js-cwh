class RailwayForm {
  submit = () => {
    alert(this.name + ': This form is submitted for train#: ' + this.trainNo)
  }
  cancel = () => {
    alert(this.name + ': This form is cancelled for train#: ' + this.trainNo)
  }
  fill = (givenName, trainNo) => {
    this.name = givenName
    this.trainNo = trainNo
    alert(this.name + ': form filled for train#: ' + this.trainNo)
  }
}

let zohaibForm = new RailwayForm()
let hamzaForm = new RailwayForm()

zohaibForm.fill('Zohaib', 420)
hamzaForm.fill('Hamza', 690)

zohaibForm.submit()
hamzaForm.submit()
hamzaForm.cancel()
