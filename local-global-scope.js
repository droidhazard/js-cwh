let a = 8
console.log(a)

{
  let b = 6
}
// console.log(b) // won't work outside the block

{
  {
    let hi = 'hello'
    console.log(hi)
    {
      console.log(hi) // will work inside the child block
    }
  }
  // console.log(hi) // won't work outside the block
}