# JavaScript Course - WDD 325

Quick reference guide for all course materials. :)

## 📁 Repository Structure

### `00_exercises/`
Practice exercises and challenges organized by topic

- **00_Einstufungstest/** - Initial assessment exercises
- **01_basics_repetition/** - JavaScript fundamentals review
- **02_general_exercises/** - 20+ practical coding exercises including:
  - Bouncer, Palindrome Checker, Fibonacci Sequence
  - Click Counter, To-Do List, Shopping Cart
  - Password Strength Checker, Temperature Conversion
  - Dynamic Multiplication Table, Grade List
  - Light/Dark Mode Toggle, and more
- **03_code_challenges/** - Additional coding challenges
- **04_blog_posts/** - Blog post application project

### `01_basics/`
JavaScript fundamentals

**Core Concepts:**
- **Variables:** `let`, `const`, `var` (scope differences)
  ```javascript
  let name = "John";        // block-scoped, can reassign
  const age = 25;           // block-scoped, cannot reassign
  var city = "Berlin";      // function-scoped (avoid)
  ```
- **Data Types:** `string`, `number`, `boolean`, `object`, `undefined`, `null`
- **Conditionals:**
  ```javascript
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  // Ternary: const status = age >= 18 ? "Adult" : "Minor";
  ```
- **Loops:**
  ```javascript
  for (let i = 0; i < 5; i++) { /* ... */ }
  array.forEach((item) => console.log(item));
  while (condition) { /* ... */ }
  ```
- **Objects:**
  ```javascript
  const person = {
    name: "Alice",
    age: 30,
    greet() { return `Hello, I'm ${this.name}`; }
  };
  ```
- **Functions:**
  ```javascript
  // Declaration
  function add(a, b) { return a + b; }
  // Arrow function
  const multiply = (a, b) => a * b;
  ```

**Files:** `01_basics.js`, `02_datatypes.js`, `03_conditional.js`, `04_loops.js`, `05_objects.js`, `06_functions.js`  
**Practice:** `00_exercises/` folder with arrays, quizzes, and shop receipt exercises  
**Tip:** Toggle `<script>` tags in `index.html` to run different lesson files

### `02_dom/`
Document Object Model manipulation

**01_basics/** - Selecting & Manipulating Elements
```javascript
// Selection
const el = document.querySelector('.class-name');
const all = document.querySelectorAll('.items');
const byId = document.getElementById('myId');

// Modification
el.textContent = "New text";
el.innerHTML = "<strong>Bold text</strong>";
el.style.color = "red";
el.classList.add('active');
el.setAttribute('data-id', '123');
```
**01_async** - Asynchronous Programming
```javascript
// Fetch API data
async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();
    console.log(data.name, data.types);
  } catch (error) {
    console.error('Error:', error);
  }
}
```
- `01_simple_example/` - Basic async/await and fetch
- `02_pokemon_suggestion/` - Tinder-style Pokémon app with PokeAPI

**02_methods/** - Array Methods
```javascript
const numbers = [5, 12, 8, 130, 44];

// Filter: create new array with elements that pass test
const big = numbers.filter(num => num > 10);  // [12, 130, 44]

// Map: transform each element
const doubled = numbers.map(num => num * 2);  // [10, 24, 16, 260, 88]

// Chaining
const users = [{name: "Alice", premium: true}, {name: "Bob", premium: false}];
const premiumNames = users
  .filter(user => user.premium)
  .map(user => user.name);  // ["Alice"]
```

**03_es6/** - Modern JavaScript
```javascript
// Default Parameters
function greet(name = "Guest") { return `Hello, ${name}`; }

// Destructuring
const {name, age} = person;
const [first, second] = array;

// Spread Operator
const combined = [...array1, ...array2];
const copy = {...originalObject};

// Classes
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  drive() { return `${this.brand} ${this.model} is driving`; }
}
const myCar = new Car('Tesla', 'Model 3');
```
- Files: `01_default_parameters.js`, `02_destructuring.js`, `03_spread.js`, `04_classes.js`
- `05_squares/` - Classes project

**04_todo_app/** - Complete todo application 
```javascript 
event.target.style.backgroundColor = 'blue';
});

// Common events: 'click', 'mouseover', 'keydown', 'submit'
```

**03_form_validation/** - Form Handling
```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent page reload
  const email = document.querySelector('#email').value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Show error messages if validation fails
});
```

**04_slider/** - Interactive Image Carousel
- Navigate with buttons and arrow keys
- Update content dynamically

**Practice Exercises:**
- `01_awesome_list_of_friends/` - Dynamic user cards
- `02_warm_up_dom/` - DOM selection practice
- `03_todo/` - Interactive todo application

### `03_advanced/`
Advanced JavaScript concepts

- **01_async/** 
  - `01_simple_example/` - Basic async/await and fetch
  - `02_pokemon_suggestion/` - API integration project (PokeAPI)
- **02_methods/** - Higher-order array methods (filter, map, chaining)
- **03_es6/** - Modern JavaScript features
  - Default parameters
  - Destructuring
  - Spread operator
  - ES6 Classes
  - `05_squares/` - Classes project
- **04_todo_app/** - Complete todo application
- **05_weather_app/** - Weather API integration project

## 🚀 Getting Started

1. Open any `index.html` file in a browser
2. Check browser console for JavaScript output
3. Modify the code and experiment
4. For `01_basics/`, toggle script tags in `index.html` to switch between lessons

## 📚 Key Topics Covered

**Basics:** Variables (var/let/const), Data Types, Conditionals, Loops, Objects, Functions  
**DOM:** Element Selection, Manipulation, Events, Forms, Dynamic Content  
**Advanced:** Async/Await, Fetch API, Array Methods, ES6+ Features, Classes

## 🔗 Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript)
