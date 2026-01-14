
class Star {
  constructor () {
    this.x = random(0, width)
    this.y = random(0, height)
    this.size = random(5, 12)
    this.speed = random(1, 5)
    this.color = color(`hsl(54, 100%, ${random(20, 60)}%)`)
  }

  display () {
    noStroke()
    fill(this.color)
    circle(this.x , this.y, this.size)
  }

  update () {

    if( this.y > height) {
      this.y = 0
    }
    
    this.updatedSpeed = map(mouseX, 0, width, 1, this.speed)
    this.y = this.y + this.updatedSpeed 
  }
}

