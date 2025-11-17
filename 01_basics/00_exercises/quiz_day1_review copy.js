/* ===========================================
   DAY 1 REVIEW QUIZ - JavaScript Basics
   =========================================== */

/* INSTRUCTIONS:
   - Answer each question by writing your code below the question
   - Some questions ask you to fix code errors
   - Some questions ask you to write new code
   - Run this file to check if your answers work correctly
   Good luck! */

console.log('===== JAVASCRIPT BASICS QUIZ =====\n');

// ============================================
// SECTION 1: VARIABLES AND DECLARATIONS
// ============================================

/* Question 1: 
   Declare a variable called 'studentName' using the BEST modern practice keyword.
   Assign it the value of your name as a string. */

// Your answer here:
const studentName = 'Martin'

/* Question 2:
   What's wrong with this code? Fix it!
   Hint: Think about what keyword should be used for values that never change */

const PI = 3.14159;
PI = 3.14; // This shouldn't be allowed!


/* Question 3:
   Declare a variable called 'score' but DON'T assign it a value.
   Then log its value. What will be printed? */

// Your answer here:
let score;
console.log('score')

// ============================================
// SECTION 2: DATA TYPES
// ============================================

/* Question 4:
   Create variables with the following data types and log their typeof:
   a) A string containing your favorite color
   b) A number representing your birth year
   c) A boolean representing if you like JavaScript (true/false)
   d) An array with 3 of your favorite foods */

// Your answer here:
const favColor = 'Black'
const birthYear = 1991
const likesJS = true
const favFoods = ['Meat', 'Stew', 'Popcorn']

/* Question 5:
   What's the difference between these two comparisons?
   Write a comment explaining when each would be true */

let comparison1 = 10 == '10';
let comparison2 = 10 === '10';

// Your explanation here:
// comparison 1 compares only the values, comparison 2 compares the value and data type 1 is true 2 is false

/* Question 6:
   Fix this code so it uses STRICT equality */

let userAge = 18;
if (userAge === 18) {
  console.log('User is 18 years old');
}


// ============================================
// SECTION 3: STRING OPERATIONS
// ============================================

/* Question 7:
   Create a greeting message using string concatenation (+)
   that says: "Hello, my name is [name] and I am [age] years old"
   Use the variables below */

let myName = 'Alex';
let myAge = 25;

// Your answer here (use concatenation with +):
console.log("Hello my name is "+ myName + "and I am " + myAge + " years old")

/* Question 8:
   Now create the SAME greeting message using template literals (backticks)
   Which method do you think is easier to read? */

// Your answer here (use template literals with ``):
console.log(`Hello my name is ${myName} and I am ${myAge} years old`)

// ============================================
// SECTION 4: ARITHMETIC OPERATIONS
// ============================================

/* Question 9:
   Calculate the following and store in variables:
   a) The sum of 45 and 78
   b) The difference between 100 and 37
   c) The product of 12 and 8
   d) The result of 50 divided by 4
   e) The remainder when 17 is divided by 5 (use modulo %)
   
   Log each result with a descriptive message */

// Your answer here:
const a9 = 45 + 78;
const b9 = 100 - 37;
const c9 = 12 * 8;
const d9 = 50 / 4;
const e9 = 17 % 5;

/* Question 10:
   What will be the value of 'counter' after this code runs?
   Write your answer as a comment, then run the code to check */

let counter = 5;
counter++;
counter++;
counter += 3;
counter--;

// Your answer: counter will be 9


// ============================================
// SECTION 5: ARRAYS
// ============================================

/* Question 11:
   Create an array called 'weekDays' with the 7 days of the week */

// Your answer here:
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/* Question 12:
   Using the array below, log the following:
   a) The first item in the array
   b) The last item in the array
   c) The third item in the array */

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

// Your answer here:
console.log(colors[0])
console.log(colors[colors.length-1])
console.log(colors[2])

/* Question 13:
   What's wrong with this code? Fix it! */

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[2]); // We want to print 'orange'


// ============================================
// SECTION 6: LOGICAL OPERATORS
// ============================================

/* Question 14:
   Fill in the blanks to make these statements true */

let isRaining = false;
let hasUmbrella = true;

// I will get wet if it's raining AND I don't have an umbrella
let willGetWet = isRaining && !hasUmbrella;

// I can stay dry if I have an umbrella OR it's not raining
let canStayDry = hasUmbrella || !isRaining;


/* Question 15:
   What will these expressions evaluate to? 
   Write your answers as comments, then uncomment the logs to check */

let a = true;
let b = false;

// a && b will be: False
// a || b will be: True
// !a will be: False
// !b will be: True

console.log('a && b:', a && b);
console.log('a || b:', a || b);
console.log('!a:', !a);
console.log('!b:', !b);


// ============================================
// SECTION 7: BONUS CHALLENGE
// ============================================

/* Bonus Question:
   Create a simple calculator!
   - Declare two numbers: num1 and num2
   - Perform all arithmetic operations (+, -, *, /, %)
   - Log each result with a descriptive message using template literals
   
   Example output:
   "15 + 5 = 20"
   "15 - 5 = 10"
   etc. */

// Your answer here:

console.log('\n===== END OF QUIZ =====');
console.log('Great job! Review your answers with your instructor.');
