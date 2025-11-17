// Function Declaration
// Syntax

function functionName(parameters, parameters) {
  // Code to be executed
  console.log('Hello World');

  return;
}

// parameters

function greet(stundentName = 'Alex') {
  console.log('Hello ' + stundentName + '!');
}

greet('Lukas');
greet('Seraina');
greet('Luca');
greet();

// Default Parameter

// Return Statement
function addAandB(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(addAandB(20, 30));
const addition = addAandB(10, 10);
console.log(addAandB(10, 10), addAandB(20, 20));
console.log(addAandB(addAandB(10, 10), addAandB(20, 20)));

// Function Expression

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(20, 20));

// Arrow Function

const add = (a, b) => a + b;

const myList = ['Neo', 'Goncalo', 'Luca'];

myList.forEach(function (student) {
  console.log('I like my student ' + student);
});

myList.forEach((student) =>
  console.log('I like my student ' + student)
);

// Using Function declaration
// Give it a name
// Input c°
// Output f°

function celciusToFahr(celcius) {
  // const validated = parseInt(celcius);
  const result = (celcius * 9) / 5 + 32;
  return `${celcius}°c is ${result}°f`;
}

console.log(celciusToFahr(20));
console.log(celciusToFahr(30));
console.log(celciusToFahr('30'));
//20
//30
//

// Scope

let globalVar = 'I am global';

function myFunction() {
  let localVar = 'I am local';
  // console.log(localVar);
}

// console.log(localVar);
myFunction();

// Closures
// Recursive Functions
// Higher order Functions

// input n
// Output n Quadrat

function square(n) {
  return n * n;
}

// input n
// Output 'String' wo n verwendet wird ZB: "Dein Zahl ist N"

function whatsYourNumber(n) {
  return 'Dein Zahl ist ' + n;
}

// console.log(n)

for (let i = 0; i < 10; i++) {
  // console.log(i);
}
console.log(i);

var message1 = [
  'varying',
  'adjustable',
  'reliable',
  'incredible',
  'anything',
  'booleans',
  'local',
  'extraordinary',
];

for (let i = 0; i < message1.length; i++) {
  console.log(message1[i][0]);
}

let message2 = ['pattern', 'arrangement', 'order', 'data', 'bytes'];

for (let i = 0; i < message2.length; i++) {
  console.log(message2[i][1]);
}

let message3 = [
  ['i', 'o', 'i'],
  ['p', 'b', 'p'],
  ['l', 'j', 'l'],
  ['a', 'e', 'a'],
  ['o', 'c', 'o'],
  ['f', 't', 'f'],
];

for (let i = 0; i < message3.length; i++) {
  console.log(message3[i][1]);
}

// message4[0][1][1]
let message4 = [
  [
    ['o', 'o', 'o'],
    ['o', 's', 'o'],
    ['o', 'o', 'o'],
  ],
  [
    ['o', 'o', 'o'],
    ['o', 't', 'o'],
    ['o', 'o', 'o'],
  ],
  [
    ['o', 'o', 'o'],
    ['o', 'r', 'o'],
    ['o', 'o', 'o'],
  ],
  [
    ['o', 'o', 'o'],
    ['o', 'i', 'o'],
    ['o', 'o', 'o'],
  ],
  [
    ['o', 'o', 'o'],
    ['o', 'n', 'o'],
    ['o', 'o', 'o'],
  ],
  [
    ['o', 'o', 'o'],
    ['o', 'g', 'o'],
    ['o', 'o', 'o'],
  ],
];

for (let i = 0; i < message4.length; i++) {
  console.log(message4[i][1][1]);
}
