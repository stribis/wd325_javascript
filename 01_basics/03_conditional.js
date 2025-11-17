
let color;  // undefined
color = 'green'
// if color is red
// dann mach
//   the color is red

if (color === 'red') {
  // Statement
  console.log('The color is red')
} else if (color === 'green') {
  console.log('The color is green')
} else if (color === 'brown') {
  console.log('The color is brown')
} else {
  console.log('The color is: ' + color)
}

// Switch Case:
// syntactic sugar
switch(color) {
  case 'red':
    console.log('The color is red')
    break;

  case 'green':
    console.log('The color is green')
    break;

  case 'pink':
    console.log('The color is pink')
    break;

  default: 
    console.log('The color is: ' + color)

}

// Ternary Operator
console.log( color === 'red' ? 'The color is red' : 'The color is' + color)