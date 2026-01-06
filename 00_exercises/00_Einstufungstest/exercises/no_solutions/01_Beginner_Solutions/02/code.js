// Task: Create an array of numbers. Write a loop to find and display the largest number in the array. 
// Additionally, write another loop to calculate the sum of all the numbers in the array.


const foo = [2,5,6,7,8,10,2,3,4,5,6]


let largest = 0
foo.forEach(item => {
  if (item > largest) {
    largest = item
  }
})
console.log(largest)


let sum = 0
let product = 1
foo.forEach(item => {
  if (item % 2 === 0 ) {
    sum+=item
  } else {
    product*= item
  }
 
})
console.log(sum)