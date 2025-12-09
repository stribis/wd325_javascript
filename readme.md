# 4FSC0WD003 - Front-End Development

## Overview

Welcome to the JavaScript course! This course is designed to provide you with a comprehensive understanding of JavaScript programming language, covering fundamental concepts, advanced topics, and practical examples. By the end of this course, you will have the knowledge and skills to build dynamic and interactive web applications using JavaScript.

### JavaScript Basics

- **Comments**: Used to explain code and are not executed. There are two types: line comments and block comments.
- **Variables**: A variable is a piece of memory that stores a value that can be changed. Good naming practices are essential for maintainability. Reserved keywords (e.g., `let`, `var`, `const`) cannot be used as variable names.
- **Declaration Keywords**:
  - `var`: Function scoped, accessible anywhere in the function.
  - `let`: Block scoped, accessible only within the block.
  - `const`: Constant, can only be initialized once.

### Data Types

- **Definition**: Data types specify the kind of information a variable holds, guiding the computer on how to use it.
- **Primitive Data Types**: There are 7 primitive data types in JavaScript:
  - `string`
  - `number`
  - `BigInt`
  - `boolean`
  - `Symbol`
  - `undefined`
  - `null`
- **Non-Primitive Data Type**: The only non-primitive data type is `object`.
- **Immutability**: Primitive data types are immutable and stored on the Call Stack.

### Kickoff: Day 1 Review Quiz

Warm-up quiz to review Day 1. File: `01_basics/00_exercises/quiz_day1_review.js`

Covers:

- Variables and declarations (var, let, const)
- Data types and typeof operator
- String concatenation vs template literals
- Arithmetic operations
- Arrays and indexing
- Logical operators (&&, ||, !)
- Comparison operators (==, ===)

### Conditional Statements

- `if / else if / else`: Execute code blocks based on conditions
- `switch`: Alternative syntax for multiple conditions (syntactic sugar)
- Ternary operator: `condition ? valueIfTrue : valueIfFalse`
- Example: `01_basics/03_conditional.js`

### Loops

- `for` loop: Iterate with a counter; great for indexed arrays
- `Array.prototype.forEach`: Iterate over array elements with a callback
- `while` loop: Repeat while a condition remains true
- Example: `01_basics/04_loops.js`

### Objects

- Object literals: Key–value pairs with `{}`
- Properties and nested structures (arrays, objects)
- Methods: Functions as object properties
- Access with dot and bracket notation
- Example: `01_basics/05_objects.js`

### Functions (Introduction)

- Function declarations vs expressions
- Parameters, default values, and return values
- Arrow functions (ES6)
- Scope: block vs function scope (`let/const` vs `var`)
- Closures and higher-order functions (filter/sort examples)
- Example: `01_basics/06_functions.js`

### Practice

- Arrays hidden-words exercise: `01_basics/00_exercises/03_arrays.js`

### Tip: Running the examples

Use `01_basics/index.html` and toggle the `<script>` tag to the file you want to run, e.g.:

```html
<!-- <script src="01_basics.js"></script> -->
<!-- <script src="04_loops.js"></script> -->
<script src="05_objects.js"></script>
```

### DOM Basics

**Element Selection Methods:**

- `getElementsByClassName()`: Returns a live HTMLCollection of elements by class name
- `getElementById()`: Returns element by unique ID (fastest method)
- `querySelector()`: Returns first element matching CSS selector (most flexible)
- `querySelectorAll()`: Returns static NodeList of all matching elements

**Comparison:**

| Feature       | `querySelectorAll` | `querySelector` | `getElementsByClassName` | `getElementById` |
| ------------- | ------------------ | --------------- | ------------------------ | ---------------- |
| Selector Type | CSS selectors      | CSS selectors   | Class names only         | ID only          |
| Returns       | Static NodeList    | Single element  | Live HTMLCollection      | Single element   |
| Flexibility   | High               | High            | Moderate                 | Low              |
| Performance   | Slower             | Slower          | Faster                   | Fastest          |

**Element Modification:**

- `innerText`: Changes/retrieves visible text (excludes hidden elements)
- `textContent`: Similar to innerText but includes hidden elements (faster)
- `innerHTML`: Changes/retrieves HTML content (supports HTML tags)

**Attributes:**

- `setAttribute(name, value)`: Set an attribute
- `getAttribute(name)`: Get an attribute value
- `removeAttribute(name)`: Remove an attribute
- Direct property assignment: `element.id = "myId"`

**Styling:**

- Inline styles: `element.style.color = "red"`
- CSS classes:
  - `classList.add(className)`: Add a class
  - `classList.remove(className)`: Remove a class
  - `classList.toggle(className)`: Toggle a class
  - `classList.contains(className)`: Check if class exists

**Creating and Manipulating Elements:**

- `document.createElement(tagName)`: Create new element
- `appendChild(element)`: Append element to parent
- `remove()`: Remove element from DOM
- `removeChild(child)`: Remove child from parent
- `replaceChild(newChild, oldChild)`: Replace a child element
- `replaceWith(newElement)`: Replace element (modern approach)
- `cloneNode(deep)`: Clone element (deep=true clones children too)

Example: `02_dom/01_basics/01_basics.js`

### Event Listeners

**Concept:**
An event listener watches for specific events (clicks, keypresses, etc.) and executes a callback function when the event occurs.

**addEventListener Syntax:**

```javascript
element.addEventListener(event, listener, options);
```

**Parameters:**

- `event`: Event name string (e.g., "click", "mouseover", "keydown")
- `listener`: Function to execute when event occurs
  - Can be anonymous function, function expression, or arrow function
- `options` (optional):
  - `capture`: Event capturing phase
  - `once`: Execute listener only once
  - `passive`: Won't call preventDefault()

**Common Use Cases:**

- Adding interactive buttons
- Dynamically creating/removing elements
- Handling user input
- Responding to mouse and keyboard events

Example: `02_dom/02_events/02_events.js`

### Practice: Awesome List of Friends

Dynamic user card generation exercise demonstrating:

- DOM manipulation
- Template literals
- Array iteration with `forEach`
- Creating complex HTML structures dynamically

Files: `02_dom/00_exercises/01_awesome_list_of_friends/`

### Warm-up & Todo App (02_dom)

- Today's lesson in `02_dom` covered a DOM warm-up exercise and a simple Todo App.
- Warm-up exercise: `02_dom/00_exercises/02_warm_up_dom` — practice selecting and updating elements via JS.
- Simple Todo App: `02_dom/00_exercises/03_todo` — basic add, mark-complete, and clear-completed UI; see `index.html`, `code.js`, and `style.css` inside that folder.
- The `03_exercises` folder at the repository root contains additional take-home exercises for students and is intentionally not summarized as lesson material here.

### Form Validation (03_form_validation)

Client-side form validation exercise demonstrating:

- `event.preventDefault()`: Prevent default form submission behavior (page reload)
- **Two validation approaches:**
  - `code_submit.js`: Validate all fields on form submission
  - `code_focus.js`: Validate individual fields on blur (focus out)
- Form field validation patterns:
  - Required fields check
  - Minimum length validation
  - Email format validation (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
  - Postal code format validation
- Error handling:
  - Dynamic error message display
  - Clear existing errors before validation
  - Field-specific error messages
- Data collection: Retrieve and store form values in a data object

Files: `02_dom/03_form_validation/` (includes `index.html`, `code_submit.js`, `code_focus.js`, `style.css`)

### Image Slider (04_slider)

Interactive image slider/carousel demonstrating:

- DOM manipulation with `append()` and `prepend()`
- Event handling:
  - Button clicks for navigation
  - Keyboard controls (arrow keys)
- Dynamic content updates:
  - Track current slide number
  - Update slide description from image `alt` attribute
- Helper functions:
  - `getAllSlides()`: Dynamically select all slide elements
  - `moveRight()` / `moveLeft()`: Slide navigation logic
  - `updateDescription()`: Update UI text based on current slide
- Ternary operators for state management

Files: `02_dom/04_slider/` (includes `index.html`, `code.js`, `style.css`)

## Advanced JavaScript (03_advanced)

### Asynchronous Programming & Data Fetching (01_async)

**Overview:**
Introduction to asynchronous JavaScript, handling time-dependent operations, and fetching data from APIs.

**Key Concepts:**

- **Async/Await Syntax:**
  - `async function`: Declares an asynchronous function
  - `await`: Pauses execution until a Promise resolves
  - Better readability compared to `.then()` chains
  
- **Try/Catch Blocks:**
  - Error handling for async operations
  - `try`: Execute async code that might fail
  - `catch`: Handle errors gracefully
  
- **Data Fetching:**
  - `fetch()` API: Make HTTP requests to external APIs
  - `response.json()`: Parse JSON response data
  - `Promise.all()`: Wait for multiple async operations to complete
  - Handling pagination with offsets

- **Practical Example - Simple Async Example:**
  - Basic fetch and data retrieval
  - Files: `03_advanced/01_async/01_simple_example/` (includes `code.js`, `index.html`)

- **Project - Pokémon Suggestion App (Tinder-style):**
  - Fetch Pokémon data from PokeAPI
  - Manage application state with `offset` for pagination
  - Map over results to fetch additional Pokémon details (types, images)
  - User interaction: swipe/like/dislike mechanics
  - Files: `03_advanced/01_async/02_pokemon_suggestion/` (includes `code.js`, `index.html`, `styles.css`)

### Higher-Order Array Methods (02_methods)

**Overview:**
Methods that operate on arrays by accepting callback functions and transforming data.

**Key Methods:**

- **`Array.prototype.filter()`:**
  - Creates a new array with elements that pass a test function
  - Returns a boolean: `true` includes element, `false` excludes it
  - Example: `scores.filter((score) => score > 20 && score < 40)`
  - Works with primitives and objects

- **`Array.prototype.map()`:**
  - Transforms each element using a callback function
  - Returns a new array of transformed elements
  - Often used to extract or modify properties
  
- **Combining Methods:**
  - Chain filter/map for complex data transformations
  - Example: Filter premium users, then map to get only names

- **Exercise Patterns:**
  - Filter with single conditions
  - Filter with multiple conditions (&&, ||, !)
  - Filter arrays of objects by property values

Files: `03_advanced/02_methods/code.js` (includes exercises and examples)

## How to Use This Repository

- Each topic is organized into separate folders containing example code.
- Experiment with the example code to reinforce your understanding and practice JavaScript programming.

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Official documentation for JavaScript.
- [JavaScript.info](https://javascript.info/): Comprehensive JavaScript tutorials and guides.
- [Eloquent JavaScript](https://eloquentjavascript.net/): Free online book covering JavaScript programming concepts.
- [Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript): Learn from a curriculum with the best curated online tutorials, blogs, and courses.

## Feedback and Questions

If you have any feedback or questions regarding the course content, feel free to reach out to the course instructor or TA.
