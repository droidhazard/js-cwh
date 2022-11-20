let marks_class_12 = [91, 82, 63, 84, null, false, "Not present"]
console.log(marks_class_12)
marks_class_12[4] = 33
marks_class_12[0] = 96
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])
console.log(`The array marks_class_12 contains ${marks_class_12.length} elements`)
console.log(typeof marks_class_12)

console.log("for loop________________")
for (let i = 0;i < marks_class_12.length; i++) {
  console.log(marks_class_12[i])
}