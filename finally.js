const f = () => {
  try {
    a = b;
    a = 0;
    console.log('Program ran successfully')
    return 0;
  }
  catch (error) {
    console.log(error.name)
    console.log(error.message)
    // console.log(p)
  }
  finally {
    console.log('code execution finished !')
    // // close the file
    // // exit the loop
    // // write to the log file
  }
}

f()

function c() {
  console.log('setp 1')
  return 0;
  console.log('setp 2')
}
c()