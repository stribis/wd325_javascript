const subway = {
  bread: 'Plain Italian',
  meat: 'Pulled Pork',
  cheese: 'Chedar',
  topping: ['Lettuce', 'Tomato', 'Cucumber'],
};

// Dot Notation
// subway.topping[0] // Lettuce
// subway.meat.foo.foo.foo.foo.foo

//const foo = subway.meat

let { bread, cheese } = subway;

// console.log(bread);
// console.log(cheese);

// Mutability

bread = 'Corn Bread';
cheese = 'Mozarella';

console.log(subway);
console.log(bread);
console.log(cheese);
// console.clear();
// Object Literal Enhancement ( Opposite of Destructuring... kinda)

const name = 'Colombia';
const capital = 'Bogota';

let completeName = function () {
  console.log(`${this.name}'s capital is ${this.capital}`);
};

const country = { name, capital, completeName };

console.log(country.completeName());
