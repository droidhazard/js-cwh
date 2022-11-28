const createTodo = async (todo) => {

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo),
  }

  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json()
  return response
}

const getTodo = async (id) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r;
}

const mainFunc = async () => {
  let todo = {
    title: 'droid',
    body: 'I am zohaib',
    userId: 1100,
  }
  let todoR = await createTodo(todo)
  console.log(todoR)
  console.log(await getTodo(10))
}

mainFunc()