// Array (default is empty)
let todoList = []
if ( localStorage.getItem('todos') ) {
  todoList = JSON.parse(localStorage.getItem('todos'))
}

renderList()

const todoForm = document.querySelector('#add')
console.log(todoList)
todoForm.addEventListener('submit', (event) => {
  // Prevent Default behaviour 
  event.preventDefault()
  // Get value from todo input field and save it in a variable
  const newTodo = document.querySelector('#addinput').value
  // Push the new todo into an array
  addTodo(newTodo)
  renderList()
  console.log(todoList)
})

// add new item to todo list and save it in localstorage
function addTodo (newTodo) {
  todoList.push(newTodo)
  localStorage.setItem('todos', JSON.stringify(todoList) )
}

function renderList () {
  document.querySelector('#list').innerHTML = ''
  if (todoList.length > 0) {
    todoList.forEach(item => {
      const listItem = document.createElement('li')
      listItem.innerText = item
      document.querySelector('#list').appendChild(listItem)
    })
  }
}