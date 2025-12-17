// Create an empty array for the list
let todoList = []

// Elements
const inputField = document.querySelector('#addinput')

document.querySelector('#addbutton').addEventListener('click', (e) => {
  e.preventDefault()
  addTodo()
})


function addTodo () {
  const newTodo = inputField.value.trim()

  // Simple input validation
  if (newTodo !== ''){
    // If the string is not empty
    const todoObject = {
      text: newTodo,
      complete: false
    }
    todoList.push(todoObject)
    localStorage.setItem('todos', JSON.stringify(todoList))
    inputField.value = ''
    console.log(todoList)
    populateTodoList()

  } else {
    alert('Error, incorrect input')
  }
}

function populateTodoList () {
    // Create the todo list
    const list = document.querySelector('#list')
    list.innerHTML = ''

    if ( todoList.length > 0 ) {
      todoList.forEach((todo, i)=> {
        // Create LI element
        const todoWrapper = document.createElement('li')
        todoWrapper.classList.add('todoWrapper')
        todoWrapper.innerHTML = `
        <div class="todoText" >${todo.text}</div>
        <div class="todoCheck ${todo.complete ? 'complete': 'false'}" data-index="${i}"></div>
        
        `
        //<input type="checkbox" ${todo.complete ? 'checked': ''} data-index="${i}">
        list.appendChild(todoWrapper)
      })

    }
    updateCheckBoxes()
}

function updateCheckBoxes () {
  let checkBoxes = document.querySelectorAll('.todoCheck')
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const index = checkbox.getAttribute('data-index')
      todoList[index].complete = !todoList[index].complete
      localStorage.setItem('todos', JSON.stringify(todoList))

      populateTodoList()

 
    })
  })
}

document.querySelector('#markAsComplete').addEventListener('click', e => {
  e.preventDefault()

  todoList = todoList.map(todo => ({...todo, complete:true}))
  console.log(todoList)
  populateTodoList()
})