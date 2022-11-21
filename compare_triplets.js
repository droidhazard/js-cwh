let a = [5,6,7]
let b = [3,6,10]

console.log(compareTriplets(a,b))

function compareTriplets(a, b) {
  let totalScore = []
  let aliceScore = 0;
  let bobScore = 0;
  for (let i=0;i<3;i++) {
    console.log(a[i])
    console.log(b[i])
    if (a[i]>b[i]) {
      aliceScore++;
    } else if (a[i]<b[i]) {
      bobScore++;
    } else {
      console.log('nothing')
    }
  }
  console.log(aliceScore)
  console.log(bobScore)
  totalScore.push(aliceScore)
  totalScore.push(bobScore)
  return totalScore;
}