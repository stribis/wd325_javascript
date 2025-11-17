
const shoppingList = ['Apples', 'Eggs', 'Milk', 'Salt', 'Pepper']
// shoppingList.push('Popcorn')
// console.log('I need to buy')
// console.log(shoppingList[0])
// console.log('I need to buy')
// console.log(shoppingList[1])
// console.log('I need to buy')
// console.log(shoppingList[2])
// console.log('I need to buy')
// console.log(shoppingList[3])

for (let i = 0; i < shoppingList.length; i++ ) {
  // console.log('i is: ', i)

  console.log('I need to buy')
  console.log(shoppingList[i])
}

// foreach

shoppingList.forEach( itemInShoppingList => {
  console.log('I need to buy', itemInShoppingList)
} )

// While 
let x = 0
// let flag = true
while (x < 5) {
  console.log('x is less than 5')
  x++
}



