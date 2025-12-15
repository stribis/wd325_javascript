// Spread as parameter in a functions

function sum(a, b, ...rest) {
  let total = a + b;

  for (let num of rest) {
    total += num;
  }

  return total;
}

console.log(sum(2, 2));
console.log(sum(2, 2, 2));
console.log(sum(2, 2, 3, 5, 6));

// Spread as a sting parameter

function stringConcat(string, ...rest) {
  let result = string;
  for (let substring of rest) {
    result += substring;
  }
  // 'Tisch'+'Stuhl'+'Holz'
  return result;
}

console.log(stringConcat('foo'));
console.log(stringConcat('foo', 'bar'));
console.log(stringConcat('foo', 'bar', 'baz', 'pop'));

// Combining arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

const oldway = array1;

array2.forEach((item) => oldway.push(item));

console.log(oldway);

const object1 = { firstName: 'Shaun', lastName: 'White', age: 35 };
const object2 = { job: 'Professional Snowboarder', country: 'USA' };

const person = { ...object1, ...object2 };
console.log(person);

const people = [
  {
    firstname: 'Max',
    lastname: 'Mustermann',
    age: 24,
    job: 'Software Engineer',
    country: 'Germany',
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 27,
    job: 'CTO',
    country: 'Switzerland',
  },
];

// we are also able to copy the values into an array with the help of the spread operator
const peopleArray = [...people, person];

console.log(peopleArray);
