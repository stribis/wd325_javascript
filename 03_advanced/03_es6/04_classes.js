class Vacation {
  // Info for the Vacation
  constructor(destination, duration) {
    this.destination = destination;
    this.duration = duration;
  }

  // How long am I going on Vacation
  printDuration() {
    return `A trip to ${this.destination} will take ${this.duration} days`;
  }

  // Where am I going on Vacation
  printDestination() {
    return `You will be going to ${this.destination}`;
  }
}

// Going to Florida for 12 days
const floridaTrip = new Vacation('Florida', 12);
// Japan, 20
const japanTrip = new Vacation('Japan', 20);

console.log(floridaTrip);
console.log(japanTrip);

console.log(japanTrip.printDuration());

// {
//   destination: 'Japan',
//   duration: 12,
//   printDuration: function () {
//     return `You will be going to ${this.destination}`;
//   },
//   printDestination: function () {
//     return `You will be going to ${this.destination}`;
//   }

// }
