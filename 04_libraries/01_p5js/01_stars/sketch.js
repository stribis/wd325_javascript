
let stars = [];
let starship

function preload() {
  starship = loadImage('./ship.webp');
}


function setup () {
  createCanvas(600, 600)
  for (let i = 0; i < 100; i++) {
    stars.push(new Star())
  }
}

function draw() {
  background(0)

  stars.forEach(star => {
    star.update()
    star.display()
    
  })
  console.log(stars[0].updatedSpeed)
  
  // console.log(starship)
  image(starship, mouseX - 128, mouseY - 128)

  
}
