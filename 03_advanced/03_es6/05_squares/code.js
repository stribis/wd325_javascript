const container = document.querySelector('.container');

class Square {
  constructor() {
    // Random x coordinate - css left
    this.x = Math.floor(Math.random() * window.innerWidth);
    // Random Y coordinate - css top
    this.y = Math.floor(Math.random() * window.innerHeight);
    // color ( would be nice to have random colors)
    // this.color = [
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255),
    // ];

    this.color = `hsl(90 100% ${Math.floor(Math.random() * 100)}%)`;
    // size
    this.size = Math.ceil(Math.random() * 14);
  }

  // Using properties -> show square in HTML
  show() {
    const element = document.createElement('div');
    element.classList.add('square');
    element.style.left = `${this.x}px`;
    element.style.top = `${this.y}px`;
    // element.style.backgroundColor = `rgb(${this.color[0]}, ${this.color[1]} , ${this.color[2]})`;
    element.style.backgroundColor = this.color;
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;

    container.appendChild(element);
  }
}

let squares = [];

for (let i = 0; i < 1000; i++) {
  squares.push(new Square());
  squares[i].show();
}
