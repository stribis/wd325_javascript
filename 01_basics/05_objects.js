
const myObjectLiteral = {}
const myObject = new Object();

const car = {
  color: 'red',
  doors: 5,
  price: 50000,
  licensed: true,
  previousOwners: [
    {
      name: 'martin',
      id: 54
    },
    {
      name: 'michael',
      id: 33
    }
],
  position: {x : 1, y: 6},
  honk: function () {
    console.log('Beeeep')
  }
}

console.log(`
  The car is ${car.color}, has ${car.doors} doors and is currently in parking x:${car.position.x }, y: ${car.position.y}.
  You can buy it for ${car.price} chf.
  `)


  console.log(document)


  