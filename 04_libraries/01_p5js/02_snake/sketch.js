const cell = 20
let s 
let food

function setup () {
  createCanvas(600, 600)
  frameRate(10)
  s = new Snake()
  pickLocation()
}

function draw () {
  background(0)
  stroke('white')

  // Horizontal Lines

  for (let i = 0; i < height; i += cell) {
    line(0, i, width, i)
  }

  for (let i = 0; i < width; i += cell) {
    line(i, 0, i, height)
  }

  if( s.eat(food)) {
    pickLocation()
  }
  
  // Update Snake values
  s.update()
  // Draw Snake
  s.show()


  // Draw food using PickLocation Vectors
  fill(255, 0, 0)
  square(food.x, food.y, cell)

}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    console.log('Move Right')
    s.dir(1, 0)
  } else if (keyCode === LEFT_ARROW) {
    console.log('Move Left')
    s.dir(-1, 0)
  } else if (keyCode === UP_ARROW) {
    console.log('Move Up')
    s.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    console.log('Move Down')
    s.dir(0, 1)
  } 
} 


function pickLocation () {
  const cols = floor(width / cell)
  const rows = floor(height / cell)

  food = createVector(floor(random(0, cols)), floor(random(0, rows)))
  food.mult(cell)
  console.log(food)
}